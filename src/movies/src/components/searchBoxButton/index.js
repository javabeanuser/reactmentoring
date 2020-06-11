import React from 'react';
import './searchBoxButton.css'

export const SearchBoxButton = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}
