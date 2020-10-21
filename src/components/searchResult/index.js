import React from 'react';
import {MovieDetails} from '../movieDetails'
import MovieSuggestions from '../../containers/movieSuggestions'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {
	useHistory
} from "react-router-dom";

export const SearchResults = ({id}) => {

   const history = useHistory()
   
   const [content, setContent] = useState({
       movie: {}, 
       isLoaded: false
   })

   async function getMovie(){
       console.log("werew")
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

   function onClickMovieHandler(id){   
    console.log(id)
    history.push("/"+id)
}
   
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