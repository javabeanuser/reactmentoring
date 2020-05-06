import React from 'react';
import Image from '../item-image'
import ItemTitle from '../item-title'
import ItemGenre from '../item-genre'
import ItemReleaseDate from '../item-release-date'
import './item.css'

function Item(props) {
  return (
    <div className="gallery" onClick={props.onClick}>    
     <Image src={props.src} alt={props.alt} />        
     <div>
       <div>
        <ItemTitle title={props.title} />
        <ItemGenre gender={props.gender} />
       </div>
       <div>        
        <ItemReleaseDate releaseDate={props.releaseDate} />
       </div>
     </div> 
  </div>
  );
}

export default Item;
