import React from 'react';
import {SearchPanel} from '../../components/searchPanel'
import MovieSuggestions from '../movieSuggestions'
import {connect} from 'react-redux'
import { 
    setEmptyMoviesListAction, 
    applyFilterAction, 
    sortByRaitingAction, 
    sortByReleaseDateAction,
    setSearchByAction
} from '../../actions/actions'

const MovieCatalog = ({movies, isGengre, applyFilterAction,sortByReleaseDateAction,sortByRaitingAction,setSearchByAction,setEmptyMoviesListAction}) => {


    async function search(searchText, searchBy){   
        const movies = await fetch('https://reactjs-cdp.herokuapp.com/movies?searchBy='+searchBy+'&search='+searchText)
          .then(response => response.json())
          .then(data => data.data);  
        applyFilterAction(movies)   
    }  

    function onSearchHandler(){             
   
        const inputVal = document.getElementById('searchInputValue').value 
        if (inputVal===''){
            window.location.reload();
        }
        setEmptyMoviesListAction()
        if (isGengre) {
            search(inputVal,"genres")             
        } else {
            search(inputVal,"title") 
        }
       
              
    }  
    
    function sortByReleaseDate(){
        sortByReleaseDateAction(movies)
    }

    function sortByRaiting(){
        sortByRaitingAction(movies)                   
    } 
    

    function onClickTitleSearchHandler(){   
        const title = document.getElementById('titleSearch')
        const gengre = document.getElementById('gengreSearch')
        title.classList = ["choiceButtonClicked"]
        gengre.classList= ["choiceButton"]
        setSearchByAction(true,false)

    }
    function onClickGengersSearchHandler(){   
        const title = document.getElementById('titleSearch')
        const gengre = document.getElementById('gengreSearch')
        title.classList = ["choiceButton"]
        gengre.classList= ["choiceButtonClicked"]
        setSearchByAction(false,true)

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

const mapStateToProps = state =>  {
    return  {
        isActive: state.isActive, 
        movies:  state.movies,
        isTitle: state.isTitle,
        isGengre: state.isGengre
    } 
}

const  mapDispatchToProps = dispatch => {    
    return{
        setEmptyMoviesListAction: () => dispatch(setEmptyMoviesListAction),
        applyFilterAction: (movies) => {dispatch(applyFilterAction(movies))},
        sortByReleaseDateAction: (movies) => {dispatch(sortByReleaseDateAction(movies))},
        sortByRaitingAction: (movies) => {dispatch(sortByRaitingAction(movies))},
        setSearchByAction: (isTitle, isGenge) => {dispatch(setSearchByAction(isTitle, isGenge))},
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(MovieCatalog)