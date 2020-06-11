import React from 'react';
import './searchBox.css';
import {SearchBoxFilter} from '../searchBoxFilter';

import {SearchBoxButton} from '../searchBoxButton'
import {SearchBoxSearchField} from '../searchBoxField'

export const SearchBox = () => {
  return (
    <div className="searchBox">
      <div>FIND YOUR MOVIE</div>
      <div>
          <SearchBoxSearchField/>
          <SearchBoxButton text="SEARCH" onClick={() => {alert('ERTY')}}/>
      </div>
      <SearchBoxFilter/>
    </div>
  );
}
