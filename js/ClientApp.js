import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'this one here', color: 'indigo'}),
        MyTitleFact({title: 'and another', color: 'peru'}),
        MyTitleFact({title: 'and some more', color: 'MediumSpringGreen'}),
        MyTitleFact({title: 'now the last time', color: 'OrangeRed'})         
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
