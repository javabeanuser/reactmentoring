import React from 'react';
import {MovieDetails} from '../movieDetails'
import MovieSuggestions from '../../containers/movieSuggestions'
import {useEffect, useState} from 'react'

export const SearchResults = ({id}) => {
   
   const [content, setContent] = useState({
       movie: {}, 
       isLoaded: false
   })

   async function getMovie(){
    const movie = await fetch('https://reactjs-cdp.herokuapp.com/movies/'+id)
    .then(response => response.json())
    .then(data => data);   
 
    setContent( 
        {
            movie: movie, 
            isLoaded: true
        }
    )

   }
   
   useEffect (()=> {
      getMovie()
   },[])
   
   return (
    <>        
    {
        content.isLoaded 
        ?   
        <>
            <MovieDetails  movie={content.movie}/>
            <MovieSuggestions movie={content.movie}/>
        </>
        : 
        <div className="centered">
            <div className="loader"/>
        </div>
        

    }        
    </>
        
   ) 
}