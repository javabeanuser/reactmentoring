import React from 'react'
import {SearchContainer} from '../../containers/searchContainer'
import {MovieItemList} from '../../containers/movieItemList'

export const MainPage = () => {
    return (
        <div>
            <SearchContainer/>
            <MovieItemList/>
        </div>             
    )
}