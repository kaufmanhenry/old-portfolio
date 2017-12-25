import React from 'react';
import {
  StaticRouter,
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Head from './Head';
import NoMatch from './NoMatch';
import Home from './Home/Home';
import Blink from './Blink/Blink';
import Ipsat from './IPSAT/IPSAT';

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
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Home {...props} />}
          />
          <Route
            path='/work/blink'
            render={() => <Blink {...props} />}
          />
          <Route
            path='/work/ipsat'
            render={() => <Ipsat {...props} />}
          />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}
