import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const rootEl=document.getElementById('root')
const view = 
<React.StrictMode>
<Router>    
    <Switch>
      <Route exact path="/" component={App}/>         
    </Switch>
</Router>
</React.StrictMode>

ReactDOM.render(view, rootEl);

serviceWorker.unregister();
