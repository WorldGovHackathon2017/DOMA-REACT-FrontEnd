import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHost } from '../../actions/host';
import './HostProfile.css';

class HostProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      host: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone_number: "",
        linkedin_url: "",
        city: "",
        state: "",
        country: "",
        photo_url: "",
        completed_registration: null,
        listings: []
      }
    }
  }

  // componentDidMount() {
  //   axios.get('api/hosts/:id')
  //     .then(({data}) => this.setState({host: data}))
  // }

  componentWillMount() {
    const hostId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchHost(hostId));
  }

  render() {
    console.log(this.props.host);
    return (
      <div className="host-profile">
        {this.props.host.name}
      </div>
    )
  }
}

const mapStateToProps = ({ host }) => ({
  host
});

// export default HostProfile;

export default connect(mapStateToProps)(HostProfile);
