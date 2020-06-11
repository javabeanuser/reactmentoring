import React from 'react';
import {Image} from '../itemImage'
import {ItemTitle} from '../itemTitle'
import {ItemGenre} from '../itemGenre'
import {ItemReleaseDate} from '../itemReleaseDate'
import './style.css'

export const Item = (props)  =>  {
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
