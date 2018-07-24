"use strict";

import * as React from 'react';
import { Link } from "react-router-dom";

export const NotFoundPage: React.StatelessComponent<{}> =()=> {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is nothing to see here.</p>
				<p><Link to="app">Back to Home</Link></p>
			</div>
		);
};

export default NotFoundPage;