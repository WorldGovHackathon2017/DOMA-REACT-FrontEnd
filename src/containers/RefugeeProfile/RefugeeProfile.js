import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRefugee } from '../../actions/refugee';

class RefugeeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refugee: {
        first_name: "",
        last_name: "",
        username: "malala",
        email: "",
        phone_number: "",
        social_media_url: "",
        home_city: "",
        home_country: "",
        organization_name: "",
        organization_url: "",
        organization_contact_name: "",
        organization_contact_email: "",
        organization_contact_phone: "",
        current_city: "",
        current_state: "",
        current_country: "",
        photo_url: "",
        completed_registration: null
      }
    }
  }

  componentWillMount() {
    const refugeeId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchRefugee(refugeeId));
  }

  render() {
    console.log(this.props.refugee);
    return (
      <div className="refugee-profile">
        {this.props.refugee.name}
      </div>
    )
  }
}

const mapStateToProps = ({ refugee }) => ({
  refugee
});

export default connect(mapStateToProps)(RefugeeProfile);
