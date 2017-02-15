import React from 'react';
import { render } from 'react-dom';

import Landing from './Landing';
import Search from './Search';

import '../styles/app.scss';

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='backdrop'>
          <Match exactly pattern='/' component={Landing} />
          <Match exactly pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
