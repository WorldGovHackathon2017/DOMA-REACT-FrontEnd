import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import HomePage from '../../containers/HomePage/HomePage';
import HostLogin from '../../containers/HostLogin/HostLogin';
import HostProfile from '../../containers/HostProfile/HostProfile';
import HostListing from '../../containers/HostListing/HostListing';
import Listings from '../../containers/Listings/Listings';
import RefugeeLogin from '../../containers/RefugeeLogin/RefugeeLogin';
import RefugeeProfile from '../../containers/RefugeeProfile/RefugeeProfile';
import Request from '../../containers/Request/Request';
import RefugeeList from '../../containers/RefugeeList/RefugeeList';

class Main extends Component {
  render() {
    return (
      <div className="main" style={styles.main}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/host-login' component="" />
          <Route exact path='/refugee-login' component="" />
          <Route exact path='/hosts/:id' component={HostProfile} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={HostListing} />
          <Route exact path='/refugees' component={RefugeeList} />
          <Route exact path='/refugees/:id' component={RefugeeProfile} />
        </Switch>
      </div>
    )
  }
}

const styles = {
  main: {
    border: "1px solid white",
    minHeight: '400px'
  }
}

export default Main;
