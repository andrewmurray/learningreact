import React from 'react';

import {Link} from 'react-router-dom';

const Landing = React.createClass({
  render () {
    return (
      <div className='search-panel'>
        <h1>myVids</h1>
        <div className='form-group'>
          <label htmlFor='email'>Search</label>
          <input type='email' className='form-control' id='email' placeholder='Search' />
        </div>
        <Link to='/search'>or browse all</Link>
      </div>
    );
  }
});

export default Landing;
