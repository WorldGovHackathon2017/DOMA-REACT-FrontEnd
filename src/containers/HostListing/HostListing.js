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
  MdHotel,
  MdKitchen,
  MdLocalLaundryService,
  MdChildCare,
  MdPets,
  MdChildFriendly,
  MdNetworkWifi,
  MdComputer,
  MdPhone,
  MdDirectionsBike,
  MdDirectionsCar,
  MdEmail
} from 'react-icons/lib/md';
import housePhoto1 from '../../images/housePhoto1.png';
import brPhoto1 from '../../images/brPhoto1.png';
import kitchenPhoto from '../../images/kitchenPhoto.png';

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
          'https://via.placeholder.com/900x400',
          'https://via.placeholder.com/900x400',
          'https://via.placeholder.com/900x400'
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
        },
        location: "https://via.placeholder.com/900x400"
      }
    }
  }

  componentWillMount() {
    const hostListingId = 1; // temporarily until api can be used.
    this.props.dispatch(fetchHostListing(hostListingId));
  }

  renderFullName() {
    return `${this.state.listing.host.first_name} ${this.state.listing.host.last_name}`;
  }

  renderLocation() {
    const {city, state, country} = this.state.listing;
    return `${city}, ${state}`;
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
              <div key={i}><img src={imgUrl} style={{ width: '100%', minHeight: 230 }} /></div>
            )}
          </Slider>
        </section>
        <section className='listing-container main-background-color'>
          <div className='listing-header'>
            <span>Cozy Guest House for Family</span> <span>   <span>     </span><MdBookmarkOutline className="accent-color" size={30} /></span>
          </div>
          <div className='listing-body'>
            <MdLocationSearching className='location' size={80} />
            <div className='name-container'>
              <h2 className='name'>{this.renderFullName()}</h2>
              <MdLocationOn size={26} className='accent-color' style={{ verticalAlign: 'bottom', marginLeft: -5}} />{this.renderLocation()}
            </div>
          </div>
        </section>
        <section className='listing-section'>
          <h3 className='accent-color'>ACCOMODATIONS</h3>
            <MdPeopleOutline size={50} />
            <span> 5 </span>   <span> </span>
            <MdAccessible size={50} />
            <span> </span>   <span> </span>
            <MdLocalHospital size={50} />
            <span> </span>   <span> </span>
            <MdSchool size={50} />
            <span> </span>   <span> </span>
            <MdChildFriendly size={50} />
            <span> </span>   <span> </span>
            <br />
            <MdPets size={50} />
            <span> </span>   <span> </span>
            <MdHotel size={50} />
            <span> 3 </span>   <span> </span>
            <MdKitchen size={50} />
            <span> </span>   <span> </span>
            <MdLocalLaundryService size={50} />
            <span> </span>   <span> </span>
            <MdNetworkWifi size={50} />
            <span> </span>   <span> </span>
            <br />
            <MdComputer size={50} />
            <span> </span>   <span> </span>
            <MdPhone size={50} />
            <span> </span>   <span> </span>
            <MdDirectionsBike size={50} />
            <span> </span>   <span> </span>
            <MdDirectionsCar size={50} />
            <span> </span>   <span> </span>
            <br />
            <span>     </span>
            <br />
        </section>
        <section className='listing-section'>
          <h3 className='accent-color'>CONTACT INFO</h3>
          <MdPhone className='contact main-color' size={40} />  (810) 441-0262 <br />
          <MdEmail className='contact main-color' size={40} />  laurenritten@gmail.com <br />
          <MdChatBubbleOutline className="contact main-color" size={40} />  Connect with Lauren
            <br />
            <span>     </span>
            <br />
        </section>
        <div className='bottom-bar main-background-color'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ hostListing }) => ({
  hostListing
});

export default connect(mapStateToProps)(HostListing);