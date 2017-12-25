import React from 'react';
import {
  StaticRouter,
  BrowserRouter,
  Route
} from 'react-router-dom';

import Head from './Head';
import Home from './Home/Home';
import Blink from './Blink/Blink';

// universal router component
const Router = typeof document !== 'undefined'
  ? BrowserRouter
  : StaticRouter;

export default function(props) {
  return (
    <Router
      basename={props.basename}
      location={props.pathname}>
      <div>
        <Head />
        <Route
          exact
          path='/'
          render={() => <Home {...props} />}
        />
        <Route
          path='/blink'
          render={() => <Blink {...props} />}
        />
      </div>
    </Router>
  );
}
