import React from 'react';
import {Image} from '../itemImage'

const FilmCover = (props)  =>  {
  return (
    <div className="gallery" onClick={props.onClick}>    
     <Image src={props.src} alt={props.alt} />    
    </div>
  );
}

export default FilmCover;