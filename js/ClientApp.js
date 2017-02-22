import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

import '../styles/app.scss';

const App = React.createClass({
  render () {
    return (
      <Router>
        <div className='backdrop'>
          <Route exact path='/' component={Landing} />
          <Route pattern='/search' component={Search} />
        </div>
      </Router>
    );
  }
});

render(<App />, document.getElementById('app'));
