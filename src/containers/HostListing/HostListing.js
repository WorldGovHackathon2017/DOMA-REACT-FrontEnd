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
    const hostListingId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchHostListing(hostListingId));
  }

  render() {
    console.log(this.props.listing);
    return (
      <div className="host-listing">
        {this.props.listing.number_of_guests}
        {this.props.listing.city}
        {this.props.listing.state}
      </div>
    )
  }
}

const mapStateToProps = ({ hostListing }) => ({
  hostListing
});

export default connect(mapStateToProps)(HostListing);