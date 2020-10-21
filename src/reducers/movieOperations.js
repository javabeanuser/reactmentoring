import React from 'react';

const initMoviesState = {
    isActive: false,
    movies: [],
    isTitle: true,
    isGengre: false
}

export function movieOperationsReducer(state=initMoviesState, action){

    switch(action.type){
        case "PREVIEW":
            const result = {
                isActive: true,
                movies: [...state.movies],
                isTitle: action.payload.isTitle,
                isGengre: action.payload.isGengre
            }
            return result;
        case "FILTER" :
            return action.payload;
        case "INIT":
            return action.payload;
        case "SORTBYRAITING":    
            return {
                isActive: true,
                movies: [...action.payload.movies].sort((a, b)=>{return b.vote_count-a.vote_count}),
                isTitle: action.payload.isTitle,
                isGengre: action.payload.isGengre
            }
        case "SORTBYRELEASEDATE":
            return {
                isActive: true,
                movies: [...action.payload.movies].sort((a, b)=>{return Date.parse(b.release_date)-Date.parse(a.release_date)}),
                isTitle: action.payload.isTitle,
                isGengre: action.payload.isGengre
            }
        default: 
            return state
    }
}