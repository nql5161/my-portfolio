import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {AboutMeScreen} from "./screens/AboutMeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/me'}>
          <AboutMeScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
