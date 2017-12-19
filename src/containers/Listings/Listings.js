import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Listings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    axios.get('api/listings')
      .then(({data}) => this.setState({listings: data}))
  }

  render() {
    return (
      <div className="listings">
      
      </div>
    )
  }
}

export default Listings;