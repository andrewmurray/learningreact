import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render () {
    return (
      <div>
        <MyTitle title='this one here' color='indigo' />
        <MyTitle title='and another' color='peru' />
        <MyTitle title='and some more' color='MediumSpringGreen' />
        <MyTitle title='now the last time' color='OrangeRed' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
