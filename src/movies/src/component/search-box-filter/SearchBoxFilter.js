import React from 'react';
import './searchBoxFilter.css'

function SearchBoxFilter(props) {
  return (
        <div className="radio-container">
                <div className="form-item radio-btn nth-2">
                    {/* <input type="radio" name="option1" id="radio1" /> */}
                    <label htmlFor="radio1">radio1</label>
                </div>
                <div className="form-item radio-btn nth-2">
                    {/* <input type="radio" name="option1" id="radio2" /> */}
                    <label htmlFor="radio2">radio2</label>
                </div>
        </div>
  );
}

export default SearchBoxFilter;
