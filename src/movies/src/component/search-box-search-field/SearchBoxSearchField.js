import React, { Component } from 'react';
import './searchBoxSearchField.css'

class  SearchBoxSearchField extends Component {
  state = {
    name: "Ivan"
  }

  onsearchBoxSearchFieldChange = event => {
    this.setState({name: event.target.value});
  }
  
  render() {
    return(
        <div>
          <input type="text" name="searchBoxSearchField" onChange={this.onsearchBoxSearchFieldChange}/>
          <div>{this.state.name}</div>
        </div>
        
        
  );
  }
}

export default SearchBoxSearchField;
