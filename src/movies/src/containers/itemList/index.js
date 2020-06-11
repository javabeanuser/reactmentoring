import React, {Component} from 'react';
import {Item} from '../../components/item'
import './itemList.css'
import {renderMyData} from './logic'

export class ItemList extends Component {

  constructor(){
    super();
    this.renderData = renderMyData.bind(this)

    this.state = {
      items : null,
      isLoaded : false
    }     
  }


  componentDidMount() {
    this.renderData();
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
 
