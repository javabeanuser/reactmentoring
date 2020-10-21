import React from 'react';
import {SearchPanel} from '../../components/searchPanel'
import {MovieSuggestions} from '../movieSuggestions'
import {
    useSelector, 
    useDispatch
} from 'react-redux'
import {useEffect} from 'react'
import { 
    setEmptyMoviesListAction, 
    applyFilterAction, 
    sortByRaitingAction, 
    sortByReleaseDateAction,
    setSortTypeAction,
    setSearchByAction
} from '../../actions/actions'

import {
	useHistory
} from "react-router-dom";


export const MovieCatalog = () => {

    const {isActive, movies, isTitle, isGengre} = useSelector(state => state)
    const dispatch = useDispatch() 

    async function search(searchText, searchBy, dispatch){   
        const movies = await fetch('https://reactjs-cdp.herokuapp.com/movies?searchBy='+searchBy+'&search='+searchText)
          .then(response => response.json())
          .then(data => data.data);  
        dispatch(applyFilterAction(movies))     
    }  

    function onSearchHandler(){             
        console.log(isTitle, isGengre, isActive)
        const inputVal = document.getElementById('searchInputValue').value 
        if (inputVal==''){
            window.location.reload();
        }
        
        dispatch(setEmptyMoviesListAction)   
        if (isGengre) {
            search(inputVal,"genres",dispatch)             
        } else {
            search(inputVal,"title",dispatch) 
        }
       
              
    }  
    
    function sortByReleaseDate(){
        dispatch(sortByReleaseDateAction(movies))
    }

    function sortByRaiting(){
        dispatch(sortByRaitingAction(movies))                      
    } 
    

    function onClickTitleSearchHandler(){   
        const title = document.getElementById('titleSearch')
        const gengre = document.getElementById('gengreSearch')
        title.classList = ["choiceButtonClicked"]
        gengre.classList= ["choiceButton"]
        dispatch(setSearchByAction(true,false)) 

    }
    function onClickGengersSearchHandler(){   
        const title = document.getElementById('titleSearch')
        const gengre = document.getElementById('gengreSearch')
        title.classList = ["choiceButton"]
        gengre.classList= ["choiceButtonClicked"]
        dispatch(setSearchByAction(false,true))  

    }


   return (
       <div className="movieCatalog">
           <div>
                <SearchPanel onSearchHandler={onSearchHandler} onClickHandleroptionOne={onClickTitleSearchHandler} onClickHandleroptionTwo={onClickGengersSearchHandler}/>
                <MovieSuggestions isView="false" sortByRaiting={sortByRaiting} sortByReleaseDate={sortByReleaseDate}/>                
           </div>
       </div>
   ) 
}