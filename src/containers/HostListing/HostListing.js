import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHostListing } from '../../actions/hostListing';

class HostListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listing: {
        host: {},
        amenity: {},
        handicap_accessible: null,
        provide_medical_attention: null,
        access_to_schools: null,
        property_type: null,
        listing_type: null,
        number_of_guests: null,
        number_of_bedrooms: null,
        number_of_beds: null,
        number_of_bathrooms: null,
        private: null, 
        phone_number: "",
        street_address: "",
        city: "",
        state: "",
        country: "",
        photo_1_url: "",
        photo_2_url: "",
        photo_3_url: "",
        completed_listing: null
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