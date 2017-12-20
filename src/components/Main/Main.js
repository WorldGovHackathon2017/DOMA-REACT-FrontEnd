import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
// import UserLogin from '../../containers/UserLogin/UserLogin';
import RefugeeProfile from '../../containers/RefugeeProfile/RefugeeProfile';
import HostProfile from '../../containers/HostProfile/HostProfile';
import Listings from '../../containers/Listings/Listings';

class Main extends Component {
  render() {
    return (
      <div className="main" style={styles.main}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          // <Route exact path='/login' component="" />
          <Route exact path='/refugees/:id' component={RefugeeProfile} />
          <Route exact path='/hosts/:id' component={HostProfile} />
          <Route exact path='/listings' component={Listings} />
        </Switch>
      </div>
    )
  }
}

const styles = {
  main: {
    border: "1px solid black",
    minHeight: '400px'
  }
}

export default Main;
