import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubLogo from '../../images/githubLogo.png'
import welcomeHome2 from '../../images/welcomeHome2.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img id="logo" src={welcomeHome2} />
        <br />
        <a href="https://github.com/WorldGovHackathon2017">
          <img id="github-logo" src={githubLogo} />
        </a>
      </div>
    )
  }
}

export default Footer;