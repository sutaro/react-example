"use strict";

import * as React from 'react';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import { IAuthor } from '../../models/author';

var toastr = require('toastr');
export interface IManageAuthorPageState{
	author:IAuthor;
	dirty: boolean;
	errors: any;
}
export interface IManageAuthorPageProps{
	params: {id: string};
}
export class ManageAuthorPage extends React.Component<IManageAuthorPageProps,IManageAuthorPageState> {
	private authorApi:AuthorApi;
	constructor(props:IManageAuthorPageProps){
		super(props);
		this.authorApi = new AuthorApi();
		this.state={author:{} as IAuthor, dirty:false, errors:{}};
	}
	/*mixins: [
		Router.Navigation
	],*/

	/*statics: {
		willTransitionFrom: function(transition: any, component:any) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	};
	}*/

	componentWillMount() {
		var authorId = this.props.params && Number(this.props.params.id); //from the path '/author:id'

		if (authorId) {
			this.authorApi.getAuthorById(authorId).then((author:IAuthor)=>
				this.setState({author:author  })
			);
		}
	}

	setAuthorState(event:any): any {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	}

	authorFormIsValid():boolean {
		var formIsValid = true;
		this.setState({errors:{}}); //clear any previous errors.
		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	}

	saveAuthor(event:any) {
		event.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}

		this.authorApi.saveAuthor(this.state.author);
		this.setState({dirty: false});
		toastr.success('Author saved.');
		//this.transitionTo('authors');
	}

	render():JSX.Element {
		return (
			<AuthorForm
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
				errors={this.state.errors} />
		);
	}
};

export default ManageAuthorPage;