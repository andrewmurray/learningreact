import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
         h1(null, this.props.title)
      )
    )
  }
})

export default MyTitle
