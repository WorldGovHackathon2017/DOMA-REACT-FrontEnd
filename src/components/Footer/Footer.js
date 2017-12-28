import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubLogo from '../../images/githubLogo.png'


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/WorldGovHackathon2017">
          <img id="github-logo" src={githubLogo} />
        </a>
        <br />
        <img id="logo" src='' />
      </div>
    )
  }
}

export default Footer;