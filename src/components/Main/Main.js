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
import RefugeeRequest from '../../containers/RefugeeRequest/RefugeeRequest';
import Requests from '../../containers/Requests/Requests';

class Main extends Component {
  render() {
    return (
      <div className="main" style={styles.main}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/host-login' component="" />
          <Route exact path='/refugee-login' component="" />
          <Route exact path='/hosts/:id' component={HostProfile} />
          <Route exact path='/refugees/:id' component={RefugeeProfile} />
          <Route exact path='/listings/:id' component={HostListing} />
          <Route exact path='/requests/:id' component={RefugeeRequest} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/requests' component={Requests} />
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
