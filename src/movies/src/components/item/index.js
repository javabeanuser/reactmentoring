import React from 'react';

import './style.css'

export const Item = ({el: {poster_path, tagline, title, genres, release_date}, onClick})  =>  {  
  return (
    <div className="gallery" onClick={onClick}>
      <img src={poster_path} alt={tagline} ></img>         
     <div>
       <div>
        <div>{title}</div>
        <div>{genres}</div>
       </div>
       <div> 
       <div><p align="right"><strong>{release_date}</strong></p></div>       
       </div>
     </div> 
  </div>
  );
}
