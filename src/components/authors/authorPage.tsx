import { IAuthor } from "../../models/author";
import AuthorList from "./authorList";

"use strict";
import * as React from 'react';
import { Link } from "react-router-dom";
import {AuthorApi} from '../../api/authorApi';

import '../styles/authors.css';


export interface IAuthorProps{
}

export interface IAuthorState{
	authors:IAuthor[];
  authorApi:AuthorApi;
}

export class AuthorPage extends React.Component<IAuthorProps,IAuthorState>{
	constructor(props:IAuthorProps){
		super(props);
		this.state={authors:[], authorApi: new AuthorApi()};
	}

	async componentDidMount() {
		const authors = await this.state.authorApi.getAllAuthors();
		this.state.authorApi.getAllAuthors()
		.then((authors)=>this.setState({authors:authors}));
	}

	render():JSX.Element {
		return <div id="author-page">
				<h1 className="author-page-title">Authors</h1>
				<Link to="/author" className="add-author-btn btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>;
	}
};

export default AuthorPage;