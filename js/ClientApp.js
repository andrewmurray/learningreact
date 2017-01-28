import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'Props are great!'}),
        MyTitleFact({title: 'Use props everywhere!'}),
        MyTitleFact({title: 'Props are the best!'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
