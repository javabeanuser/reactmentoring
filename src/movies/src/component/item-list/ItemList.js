import React, { Component } from 'react';
import Item from '../item'
import './itemList.css'

class ItemList extends Component {

  constructor(){
    super();

    this.state = {
      items : null,
      isLoaded : false
    }     
  }


  componentDidMount() {
    this.renderMyData();
  }

  renderMyData(){
    fetch('https://reactjs-cdp.herokuapp.com/movies')
        .then((response) => response.json())
        .then((responseJson) => responseJson.data)
        .then(data => {
          this.setState({ items : data, isLoaded : true })
        })
        .catch((error) => {
          console.error(error);
        });
}

  showMesasge(){
    alert('Hi');
  }

  render(){        

     let items = [];     
     if (this.state.isLoaded){
      items =  this.state.items;
      console.log(items)
      items = items.map(el => {
        return <Item key={Math.random()} src={el.poster_path} alt={el.tagline} title={el.title} gender={el.genres} releaseDate={el.release_date} onClick={this.showMesasge} />
     })
     }       
   
    return(
    <div>
     {items}
    </div>
    
  );
}

}

export default ItemList;
