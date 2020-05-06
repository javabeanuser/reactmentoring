import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemList from './component/item-list'
import SearchBox from './component/search-box'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SearchBox/>
          <ItemList/>
      </header>
    </div>
  );
}

export default App;
