import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>DOMA</h2>
        <nav>
          <ul>
            <li><Link to="/">DOMA</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;