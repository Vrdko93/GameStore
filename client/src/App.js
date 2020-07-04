import React from 'react';
import './App.css';
import {Router} from '@reach/router';

import AllGames from './views/AllGames';
import CreateGame from './views/CreateGame';
import Showgame from './views/ShowGame';
import EditGame from './views/EditGame';

function App() {
  return (
    <div className="App">
        <Router>
          <AllGames path="/"/>   
          <CreateGame path="/game/new"/>
          <Showgame path="/game/:id"/>
          <EditGame path="/game/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
