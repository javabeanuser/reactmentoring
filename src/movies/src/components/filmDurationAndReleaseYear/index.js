import React from 'react'
import './style.css'

export const FilmDurationAndReleaseYear = (props) => {
    return (
    <div id="grid">
        <div id="info">{props.releaseYear}</div>
        <div id="description">year</div>
        <div id="info">{props.filmDuration}</div>
        <div id="description">min</div>
    </div>
    )
}