import React from 'react';
// import {Router} from 'react-router';
// import logo from './logo.svg';
import './App.css';
import {ItemList} from './containers/itemList'
import {SearchBox} from './components/searchBox'
import {SearchButton} from  './components/searchButton'
import {SearchResult} from  './containers/searchResults'
import ErrorBoundary from './exception/ErrorBoundary'

export default () => {
  return (    
    <ErrorBoundary>
      <SearchResult></SearchResult>
      {/* <div className="App">
        <header className="App-header">
            <SearchBox/>
            <ItemList/>
        </header>
      </div>   
      <SearchButton/>      */}
    </ErrorBoundary> 
  );
}