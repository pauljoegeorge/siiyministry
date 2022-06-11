import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { routeGenerator } from './routes';
import './index.css';

function App(props) {
  return (
    <Router>
      <Switch>
        {routeGenerator({
          ...props
        })}
      </Switch>
    </Router>
  );
}

export default App;
