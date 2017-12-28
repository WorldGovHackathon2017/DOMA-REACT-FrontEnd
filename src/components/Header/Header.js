import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import domaHeaderLogo from '../../images/domaHeaderLogo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div><Link to="/listings"><img id="logo" src={domaHeaderLogo} /></Link></div>
        <nav>
          <ul id="links">
            {!this.props.current_user && <li><a href="/">Login/Sign-Up</a></li>}
            {this.props.current_user && this.props && <li><Link to={`/hosts/${this.props.current_user.id}`}>{`${this.props.current_user.first_name}`}</Link></li>}
            {this.props.current_user && <li><Link to={`/refugees/${this.props.current_user.id}`}>{`${this.props.current_user.first_name}`}</Link></li>}
            {this.props.current_user && <li><Link to="/listings">Listings</Link></li>}
            {this.props.current_user && <li><Link to="/requests">Requests</Link></li>}
            {/*<li><Link to="/search">Search</Link></li>*/}
            {this.props.current_user && <li><a href='/api/logout'>Logout</a></li>}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;