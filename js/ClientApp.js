import React from 'react'
import { render } from 'react-dom'

import '../styles/app.scss'

const App = React.createClass({
  render () {
    return (
      <div className='backdrop'>
        <div className='search-panel'>
          <h1>svideo</h1>
          <input type='text' placeholder='search' />
          <a>or browse all</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
