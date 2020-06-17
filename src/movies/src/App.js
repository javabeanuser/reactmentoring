import React from 'react';
// import {Router} from 'react-router';
// import logo from './logo.svg';
import './App.css';
import {ItemList} from './containers/itemList'
import {SearchBox} from './components/searchBox'
import {SearchButton} from  './components/searchButton'
import {FilmInfo} from  './containers/filmInfo'
import ErrorBoundary from './exception/ErrorBoundary'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default () => {
  return (    
    <ErrorBoundary>
    <Router>    
        <Switch>
          <Route exact path="/">
          <div className="App">
            <header className="App-header">
                <SearchBox/>
                <ItemList/>
            </header>
          </div>  
          </Route>
          <Route path="/search">
            <FilmInfo></FilmInfo>
          </Route>
        </Switch>
    </Router>
    </ErrorBoundary> 
  );
}