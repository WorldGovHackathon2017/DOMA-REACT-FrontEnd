import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHostListing } from '../../actions/hostListing';
import './HostListing.css';
import Slider from 'react-slick';
import { GridList, GridTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {
  MdBookmarkOutline,
  MdBookmark,
  MdChatBubbleOutline,
  MdLocationSearching,
  MdLocationOn,
  MdPermIdentity,
  MdPeopleOutline,
  MdAccessible,
  MdLocalHospital,
  MdSchool,
  MdPerson,
  MdChildCare,
  MdChildFriendly,
  MdNetworkWifi,
  MdComputer,
  MdDirectionsBike,
  MdDirectionsCar,
  MdPhone,
  MdEmail
} from 'react-icons/lib/md';

class HostListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listing: {
        handicap_accessible: true,
        provide_medical_attention: true,
        access_to_schools: true,
        property_type: 3,
        listing_type: 1,
        number_of_guests: 5,
        number_of_bedrooms: 2,
        number_of_beds: 3,
        number_of_bathrooms: 1,
        private: true, 
        phone_number: "",
        street_address: "569 Forest Hill Rd",
        city: "Mansfield",
        state: "Ohio",
        country: "US",
        images: [
          "https://via.placeholder.com/900x400",
          "https://via.placeholder.com/900x400",
          "https://via.placeholder.com/900x400"
          ],
        completed_listing: true,
        host: {
          first_name: "Lauren",
          last_name: "Ritten",
          username: "laurie",
          email: "laurenritten@gmail.com",
          phone_number: "(810)441-0262",
          linkedin_url: "https://www.linkedin.com/in/lauren-ritten-828b6879/",
          city: "Portland",
          state: "NY",
          country: "US",
          photo_url: "",
          completed_registration: true,
        },
        amenity: {
          heat: true,
          air_conditioning: true,
          washer: true,
          dryer: true,
          closets: 5,
          drawers: 10,
          wifi: true,
          computer: true,
          phone: true,
          tv: true,
          bikes: 3,
          transportation: true,
          pet_friendly: true,
          family_friendly: true,
          baby_friendly: true,
          toddler_friendly: true,
          child_friendly: true,
          teen_friendly: true,
          elderly_friendly: true
        }
      }
    }
  }

  componentWillMount() {
    const hostListingId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchHostListing(hostListingId));
  }

  render() {
    console.log(this.props.listing);
    const sliderSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="host-listing">
        <section className='carousel-container'>
          <Slider {...sliderSettings}>
            {this.state.listing.images.map((imgUrl, i) =>
              <div key={i}><img src={imgUrl} style={{ width: '100%', minHeight: 220 }} /></div>
            )}
          </Slider>
        </section>
        <br />
        <section className='listing-container main-background-color'>
          <div>
            {this.state.listing.number_of_guests}
            {this.state.listing.city}
            {this.state.listing.state}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ hostListing }) => ({
  hostListing
});

export default connect(mapStateToProps)(HostListing);