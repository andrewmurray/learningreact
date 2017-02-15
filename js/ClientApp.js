import React from 'react'
import { render } from 'react-dom'

import '../styles/app.scss'

const App = React.createClass({
  render () {
    return (
      <div className='backdrop'>
        <div className='search-panel'>
          <h1>svideo</h1>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Search</label>
            <input type='email' className='form-control' id='exampleInputEmail1' placeholder='Search' />
          </div>
          <a>or browse all</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
