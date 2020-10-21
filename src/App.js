import React from 'react';

import MovieCatalog from './containers/movieCatalog'
import {SearchResults} from './components/searchResult'
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

const movie = {
	budget: 175000000,
	genres: ["Adventure", "Science Fiction", "Action"],
	id: 333339,
	overview: "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
	poster_path: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
	release_date: "2018-03-28",
	revenue: 0,
	runtime: 140,
	tagline: "A better reality awaits.",
	title: "Ready Player One",
	vote_average: 8.1,
	vote_count: 617	
}

function App() {
  return (
	<BrowserRouter>
		<Switch>
		<Route exact path="/:id" render={(
			{match})=>(
					<SearchResults id={match.params.id} />
				)} />;
		<Route exact path="/">
			<MovieCatalog/>
		</Route>
	</Switch>
	</BrowserRouter>
  )
  

}

export default App;
