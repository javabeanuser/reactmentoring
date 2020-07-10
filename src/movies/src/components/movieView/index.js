import React from 'react'
import {MovieSingleView} from '../movieSingleView'
import {RecommendedMovieItemList} from '../recommendedMovieItemList'
import {SortPanel} from '../sortPanel'

export const MovieView = (props) => {
    return (
        <div>
            <MovieSingleView movie={props.movie}/>  
            <div id="sortPanel">
                <SortPanel />  
            </div> 
            <div id="filterPanel">
                <RecommendedMovieItemList/>
            </div> 
        </div>
               
    )
}