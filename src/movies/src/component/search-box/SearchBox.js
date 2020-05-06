import React from 'react';
import './searchBox.css';
import SearchBoxFilter from '../search-box-filter';

import SearchBoxButton from '../search-box-button'
import SearchBoxSearchField from '../search-box-search-field'

function SearchBox() {
  return (
    <div className="searchBox">
      <div>FIND YOUR MOVIE</div>
      <div>
          <SearchBoxSearchField/>
          <SearchBoxButton text="SEARCH"/>
      </div>
      <SearchBoxFilter/>
    </div>
  );
}

export default SearchBox;
