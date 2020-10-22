import React from 'react';

import MovieCatalog from './containers/movieCatalog'
import {SearchResults} from './components/searchResult'
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";

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
