import React from 'react';
import './searchBox.css';
import {SortPanel} from '../../components/sortPanel';

export const SearchContainer = () => {
  return (
    <div className="searchBox">
      <div>FIND YOUR MOVIE</div>
      <div>
          <input type="text" name="searchBoxSearchInput" /> 
          <button onClick={() => {alert('Я не работаю, я устал')}}>SEARCH</button>   
      </div>
      <SortPanel options={["RAITING","RELEASE"]}/>
    </div>
  );
}
