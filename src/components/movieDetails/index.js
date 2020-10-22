import React from 'react';

export const MovieDetails = ({movie:{budget, genres, id, overview, poster_path, release_date, revenue, runtime, tagline, title, vote_average, vote_count}}) => {
   return (
       <div className="movieDetails">
             <img className="moviePreview" src={poster_path}/>
             <div>
                <div className="movieDetailsTitle">
                    <div>{title}</div>
                    <input type="button" className="movieDetailsRate" disabled value={vote_average}/>
                </div>
                <div className="movieDetailsGenres">{genres.join(" & ")}</div>
                <div className="movieDetailsInfoBlock">
                    <div className="timelineValue">{release_date.split("-")[0]}</div>
                    <div className="timelineDescription">year</div>
                    <div className="timelineValue">{runtime} </div>
                    <div className="timelineDescription">min</div>                    
                </div>
                <div className="movieDetailsOveriew">{overview}</div>
             </div>
       </div>
   ) 
}