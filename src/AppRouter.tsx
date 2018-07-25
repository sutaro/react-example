import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/App";
import * as React from 'react';
import {AboutPage} from './components/about/AboutPage';
import {ManageAuthorPage} from './components/authors/manageAuthorPage';
import {AuthorPage} from './components/authors/authorPage';
import {NotFoundPage} from './components/NotFoundPage';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/authors" component={AuthorPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/author" exact component={ManageAuthorPage}/>
        <Route path="/author/:id" component={ManageAuthorPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}