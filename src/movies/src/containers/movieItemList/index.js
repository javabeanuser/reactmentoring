import React, {Component} from 'react';
import {Item} from '../../components/item'
import './movieItemList .css'
import {renderMyData} from './logic'

const initState = {
    items : null,
    isLoaded : false
}

export class MovieItemList extends Component {

  constructor(){
    super();
    this.renderData = renderMyData.bind(this)

    this.state = {
      items : [{}],
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
   
     if (this.state.isLoaded){      
     }        
    return(
    <div>
      {
      this.state.items.map(el => (<Item 
                    key={el.id} 
                    el={el}
                    onClick={this.showMesasge} 
        />))
        }
    </div>
    
  );
}

}
 
