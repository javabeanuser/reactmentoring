import React, {Component} from 'react';
import {Image} from '../../components/itemImage';
import {FilmTitle} from '../../components/filmTitle'
import {FilmRating} from '../../components/filmRating'
import {SearchButton} from '../../components/searchButton'
import {FilmDurationAndReleaseYear} from '../../components/filmDurationAndReleaseYear'
import {FilmDescription} from '../../components/filmDescription'
import {SortPanel} from '../../components/sortPanel'
import {ItemList} from '../../containers/itemList'
import './style.css'

export class FilmInfo extends Component {
    
    render(){
        return(
   <div>
    <div id="searchResult"> 
        <div id="searchButton">
            <SearchButton/> 
        </div> 
        <div id="searchImage">
            <Image src="https://news.liga.net/public/images/general/2010/11/21/201011210000008006.jpg" alt="hi" />
        </div> 
        <div id="searchFilmTitle">
            <FilmTitle title="Гарри потный и потайная комната"/>                        
        </div> 
        <div id="searchRaiting">
            <FilmRating rating="4.5"/>
        </div> 
        <div id="serachFilmDuration">
            <FilmDurationAndReleaseYear releaseYear="2018" filmDuration="112"/>
        </div> 
        <div id="serachFilmDescription">
            <FilmDescription filmDescription="В далекой далекой галактике, было дохера народу и все они пили спрайт по выходным. Но аодин прекрасный день всё изменилось и спрайт спрайт стал стоить по 200р стакан"/>
        </div> 
    </div>
    <div>
    <div id="sortPanel">
                <SortPanel />  
    </div> 
    <div id="filterPanel">
        <ItemList/>
    </div>
    </div>
    </div>
   )
    }
}