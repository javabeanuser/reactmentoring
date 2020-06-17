import React from 'react'
import './style.css'
import { getAllByDisplayValue } from '@testing-library/react'

export const FilmDurationAndReleaseYear = (props) => {
    return (
    <div id="grid">
        <div id="info">{props.releaseYear}</div>
        <div id="infoDescription">year</div>
        <div id="info">{props.filmDuration}</div>
        <div id="infoDescription">min</div>
    </div>
    )
}