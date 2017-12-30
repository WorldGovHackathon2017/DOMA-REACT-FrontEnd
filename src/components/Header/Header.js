import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import domaHeaderLogo from '../../images/domaHeaderLogo.png';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <div>
          {!this.props.current_user && <Link to="/"><img id="logo" src={domaHeaderLogo} /></Link>}
          {this.props.current_user && <Link to="/listings"><img id="logo" src={domaHeaderLogo} /></Link>}
          <br />

        </div>
      </div>
    )
  }
}

export default Header;