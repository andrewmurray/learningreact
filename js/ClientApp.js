import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

import '../styles/app.scss';

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='backdrop'>
          <Route exact path='/' component={Landing} />
          <Route pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
