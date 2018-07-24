import { IAuthor } from "../../models/author";
import AuthorList from "./authorList";

"use strict";
import * as React from 'react';
import { Link } from "react-router-dom";
import {AuthorApi} from '../../api/authorApi';

export interface IAuthorProps{
	authorApi:AuthorApi;
}

export interface IAuthorState{
	authors:IAuthor[];
}

export class AuthorPage extends React.Component<IAuthorProps,IAuthorState>{
	constructor(props:IAuthorProps){
		super(props);
		this.setState({
			authors : []
		});
	}

	componentDidMount() {
		this.props.authorApi.getAllAuthors()
		.then((authors)=>this.setState({authors:authors}));
	}

	render():JSX.Element {
		return <div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>;
	}
};

export default AuthorPage;