import React from 'react';
import {ChoicePanel} from '.././choicePanel'

export const SearchPanel = ({onSearchHandler, onClickHandleroptionOne, onClickHandleroptionTwo}) => {
   
    return (
       <div className="searchPanel">
           <div>                
                <div className="searchTitle">FIND YOUR MOVIE</div>
                <div className="searchInputPanel">
                    <input id="searchInputValue" type="input" className="searchInput"></input>
                    <input type="button" onClick={onSearchHandler} className="searchButton" value="SEARCH"></input>
                </div>
               <div>
                <ChoicePanel onClickHandleroptionOne={onClickHandleroptionOne} onClickHandleroptionTwo={onClickHandleroptionTwo} title="SEARCH BY" optionOne="TITLE" optionTwo="GENGRE" idOne="titleSearch" idTwo="gengreSearch"/>
               </div>
           </div>
           <div>               
            </div>
       </div>       
   ) 
}