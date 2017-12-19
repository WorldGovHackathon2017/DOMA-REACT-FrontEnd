import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default Main