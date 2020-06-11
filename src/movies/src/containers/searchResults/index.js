import React, {Component} from 'react';
import {Image} from '../../components/itemImage';
import {FilmTitle} from '../../components/filmTitle'
import {FilmRating} from '../../components/filmRating'
import {SearchButton} from '../../components/searchButton'
import {FilmDurationAndReleaseYear} from '../../components/filmDurationAndReleaseYear'
import {FilmDescription} from '../../components/filmDescription'
import {Ribbon} from '../../components/ribbon'
import './style.css'

export class SearchResult extends Component {
    
    render(){
        return(
   
    <div>
        <div id="">
            <div id="item1">
                <Image src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/how-to-execute-a-link-conversion-strategy-5df792498b991-760x400.png" alt="hi" />
            </div>
            <div id="item2">
            <div>
                <div>
                    <SearchButton/>
                    <FilmTitle title="Super Movie"/>
                    <FilmRating rating="4.5"/>
                    <FilmDurationAndReleaseYear releaseYear="2018" filmDuration="112"/>
                    </div>
            <div><FilmDescription filmDescription="testddtd t st set set set set set sdrsfsefse fs s "/></div>
            </div>           
            
            
            </div>           
        </div>
        <div><Ribbon /></div>
        
        
    </div>
   )
    }
}