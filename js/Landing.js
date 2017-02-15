import React from 'react';
import { render } from 'react-dom';

import {Link} from 'react-router';

export default Landing = React.createClass({
  render () {
    return (
      <div className='search-panel'>
        <h1>svideo</h1>
        <div className='form-group'>
          <label htmlFor='email'>Search</label>
          <input type='email' className='form-control' id='email' placeholder='Search' />
        </div>
        <Link to='/search'>or browse all</Link>
      </div>
    );
  }
});
