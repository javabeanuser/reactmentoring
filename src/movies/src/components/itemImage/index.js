import React from 'react';
import './itemImage.css'

export const Image  = (props) => {
  return (    
      <img src={props.src} alt={props.alt}></img>   
  );
}


