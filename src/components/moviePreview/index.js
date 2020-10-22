import React from 'react';


export const MoviePreview = ({movie:{
    budget, genres, id, overview, poster_path, release_date, revenue, runtime, tagline, title, vote_average, vote_count
},
onClickHandler}) => {
   return (
       <div className="moviePreview" onClick={() => onClickHandler(id)}>
           <div>
             <img src={poster_path} alt={overview}/>
             <div>
                <div className="movieInfo">
                    <label className="movieName">{title}</label>
                    <input className="movieYear" type="button" value={release_date.split('-')[0]} enabled="false"></input>
                    <input className="movieYear" type="button" value={vote_average} disabled></input>
                </div>
                <div className="movieGenres">{genres.join(' & ')}</div>
             </div>
           </div>
       </div>
   ) 
}