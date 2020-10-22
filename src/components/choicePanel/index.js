import React from 'react';

export const ChoicePanel = ({title, optionOne, optionTwo, idOne, idTwo, onClickHandleroptionOne, onClickHandleroptionTwo}) => {

   return (
       <div className="choicePanel">              
            <div className="choicePanel">{title}</div>
            <div className="choiceOption">
                <input  className="choiceButtonClicked" 
                        id={idOne} 
                        onClick={(e) =>onClickHandleroptionOne(e)} 
                        type="button" 
                        name="options" 
                        value={optionOne} />
                <input  className="choiceButton" 
                        id={idTwo} 
                        onClick={(e) =>onClickHandleroptionTwo(e)} 
                        type="button" 
                        name="options" 
                        value={optionTwo}/>
            </div>  
       </div>
   ) 
}