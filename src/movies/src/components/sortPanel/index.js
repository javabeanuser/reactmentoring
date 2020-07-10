import React from 'react'
import './style.css'

export const SortPanel = ({options}) => {
    return (
    <div>
            <div id="textSort"> SORT BY </div>
            <div class="switch-field">
                <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                <label for="radio-one">{options[0]}</label>
                <input type="radio" id="radio-two" name="switch-one" value="no" />
                <label for="radio-two">{options[1]}</label>
            </div>

    </div>
    )
}