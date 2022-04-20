import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './pages/search';
import Trending from './pages/trending/Trending';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/trending'>
            <Trending />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
