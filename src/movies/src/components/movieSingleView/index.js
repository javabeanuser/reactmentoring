import React, {Component} from 'react';
import './style.css'

export const  MovieSingleView = ({movie: {imageUrl, imageAlt, title, raiting, releaseYear, duration, description}}) => {
return(
   <div>
    <div id="searchResult"> 
        <div id="searchButton">
            {/* <SearchButton/>  */}
        </div> 
        <div id="searchImage">
            <img src={imageUrl} alt={imageAlt}></img>   
        </div> 
        <div id="searchFilmTitle">
            <div>{title}</div>                      
        </div> 
        <div id="searchRaiting">
            <div class="circle">{raiting}</div>
        </div> 
        <div id="serachFilmDuration">
            <div id="grid">
                <div id="info">{releaseYear}</div>
                <div id="infoDescription">year</div>
                <div id="info">{duration}</div>
                <div id="infoDescription">min</div>
            </div> 
        </div> 
        <div id="serachFilmDescription">
            <div>{description}</div>
        </div> 
    </div>
    <div>
    </div>
    </div>
   )
}
