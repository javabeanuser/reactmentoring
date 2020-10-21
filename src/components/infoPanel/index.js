import React from 'react';
import {ChoicePanel} from '.././choicePanel'

export const InfoPanel = ({infoTitle, title, optionOne, optionTwo, choiseFilter, onClickHandleroptionOne, onClickHandleroptionTwo}) => {
   return (
       <div className="infoPanel">              
            <div className="choicePanel" >{infoTitle}</div>      
            {!onClickHandleroptionOne || !onClickHandleroptionTwo
                ?
                <div/>
                :
                <ChoicePanel    title="SORT BY" 
                                optionOne="RELEASE DATE" 
                                optionTwo="RAITING" 
                                idOne="choiceOptionOne" 
                                idTwo="choiceOptionTwo" 
                                onClickHandler={choiseFilter} 
                                onClickHandleroptionOne={onClickHandleroptionOne} 
                                onClickHandleroptionTwo={onClickHandleroptionTwo}/>
            }  
       </div>
   ) 
}