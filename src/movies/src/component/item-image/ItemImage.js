import React from 'react';
import './itemImage.css'

function Image(props) {
  return (    
      <img src={props.src} alt={props.alt}></img>   
  );
}

export default Image;
