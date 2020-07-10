import React from 'react';
// import {Router} from 'react-router';
// import logo from './logo.svg';
import './App.css';
import {MainPage} from './components/mainPage'
import {MovieView} from './components/movieView'
import {ErrorBoundary} from './exception'

const movie = {
  imageUrl: "https://news.liga.net/public/images/general/2010/11/21/201011210000008006.jpg", 
  imageAlt: "hi", 
  title: "Гарри потный и потайная комната", 
  raiting: "4.9", 
  releaseYear: "2018", 
  duration: "112", 
  description: "В далекой далекой галактике, было дохера народу и все они пили спрайт по выходным. Но аодин прекрасный день всё изменилось и спрайт спрайт стал стоить по 200р стакан"
}

export const App = () => {
  return ( 
    <ErrorBoundary>
    <MainPage/>
    {/* <MovieView movie={movie}/> */}
   </ErrorBoundary> 

  );
}