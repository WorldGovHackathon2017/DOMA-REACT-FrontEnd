import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RefugeeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refugee: {
        name: ""
      }
    }
  }

  componentDidMount() {
    axios.get('api/refugees/:id')
      .then(({data}) => this.setState({refugee: data}))
  }

  render() {
    return (
      <div className="refugee-profile">
      
      </div>
    )
  }
}

export default RefugeeProfile;