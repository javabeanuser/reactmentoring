import React from 'react';
import {InfoPanel} from '../../components/infoPanel'
import {MoviePreview} from '../../components/moviePreview'
import { connect} from 'react-redux'
import {useEffect} from 'react'
import {setInitMoviesListAction} from '../../actions/actions'
import {useHistory} from "react-router-dom";


const MovieSuggestions = ({sortByRaiting, sortByReleaseDate, movie, isView, isActive, movies, setInitMoviesListAction}) => {
    
    const history = useHistory()

    useEffect (()=> {
        
        async function createsMovies(){  
            const movies = await fetch('https://reactjs-cdp.herokuapp.com/movies')
              .then(response => response.json())
              .then(data => data.data);  
            setInitMoviesListAction(movies)
            
        }

        async function getMoviesTheSameGenger(){  
            const movies = await fetch('https://reactjs-cdp.herokuapp.com/movies?filter='+ movie.genres.join(","))
              .then(response => response.json())
              .then(data => data.data);  
            setInitMoviesListAction(movies)           
        }
        
        if (isView) {
            createsMovies()
        } else {
            getMoviesTheSameGenger()            
        }     

    },[])    
  
    
    function onClickMovieHandler(id){   
        console.log(id)
        history.push("/"+id)
        document.location.reload()
    }


   return (
       <div className="movieSuggestions">
        {
           isView 
           ? <InfoPanel  infoTitle={movies.length+" movie found"}
           onClickHandleroptionOne={() => {sortByRaiting(movies)}} 
           onClickHandleroptionTwo={() => {sortByReleaseDate(movies)}}/>
           : <InfoPanel  infoTitle={"Movies by: " + movie.genres.join(" & ")}/>
        }            
            <div className="catalogView">
                {
                    isActive == true ? movies.map(e=>
                            <MoviePreview   
                                            key={e.id} movie={e}
                                            onClickHandler={onClickMovieHandler}/>
                            ): <div className="loader"/>
                }                    
                </div>
       </div>
   ) 
}

const mapStateToProps = state =>  {
    console.log(state.isActive)
    return  {
        isActive: state.isActive, 
        movies:  state.movies,
        isTitle: state.isTitle,
        isGengre: state.isGengre
    } 
}

const  mapDispatchToProps = dispatch => {    
    return{
        setInitMoviesListAction: (movies) => dispatch(setInitMoviesListAction(movies))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieSuggestions)