import React from 'react'
import { render } from 'react-dom'

const App = React.createClass({
  render () {
    return (
      <div className="app">
        <div className="">
        <h1>svideo</h1>
          <input type="text" placeholder="search" />
          <a>or browse all</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
