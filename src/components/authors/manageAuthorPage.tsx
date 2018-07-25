"use strict";

import * as React from 'react';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import {IAuthor} from '../../models/author';
import * as toastr from "toastr";
import {Redirect, RouteComponentProps} from "react-router";

export interface IManageAuthorPageState {
  author: IAuthor;
  dirty: boolean;
  errors: any;
  redirect: boolean;
}

export interface IManageAuthorPageProps extends RouteComponentProps<any> {}

export class ManageAuthorPage extends React.Component<IManageAuthorPageProps, IManageAuthorPageState> {
  private authorApi: AuthorApi;

  constructor(props: IManageAuthorPageProps) {
    super(props);
    this.authorApi = new AuthorApi();
    this.state = {author: {id: '', firstName: '', lastName: ''} as IAuthor, dirty: false, errors: {}, redirect: false};
    this.saveAuthor = this.saveAuthor.bind(this);
    this.setAuthorState = this.setAuthorState.bind(this);
    this.authorFormIsValid = this.authorFormIsValid.bind(this);
  }

  componentWillMount() {
    var authorId = this.props.match.params && this.props.match.params.id; //from the path '/author:id'

    if (authorId) {
      this.authorApi.getAuthorById(authorId).then((author: IAuthor) =>
        this.setState({author: author})
      );
    }
  }

  setAuthorState(event: any): any {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({author: this.state.author});
    return this.authorFormIsValid();
  }

  authorFormIsValid(): boolean {
    var formIsValid = true;
    this.setState({errors: {}}); //borrar fallos anteriores.
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }
    else {
      this.state.errors.firstName = '';
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }
    else {
      this.state.errors.lastName = '';
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }

  saveAuthor(event: any): any {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    this.authorApi.saveAuthor(this.state.author);
    this.setState({dirty: false, redirect: true});
    toastr.success('Author saved.');
    //this.props.history.push('/authors'); /*Otra forma de redireccionar*/
  }

  render(): JSX.Element {
    if (this.state.redirect) return <Redirect to="/authors"/>;
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}/>
      </div>
    );
  }
};

export default ManageAuthorPage;