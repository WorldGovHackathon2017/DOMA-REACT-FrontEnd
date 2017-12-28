import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {
  MdPermIdentity,
  MdPeopleOutline,
  MdSchool,
  MdLocationSearching,
  MdLocationOn,
  MdPhone,
  MdEmail
} from 'react-icons/lib/md';
import './RefugeeProfile.css';
import { fetchRefugee } from '../../actions/refugee';

class RefugeeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refugee: {
        images: [
          'https://via.placeholder.com/900x400', 'https://via.placeholder.com/900x400', 'https://via.placeholder.com/900x400', 'https://via.placeholder.com/900x400'
        ],
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
        first_name: 'John',
        last_name: ' Edwards',
        username: 'john1234',
        email: 'john@gmail.com',
        phone_number: 1234567890,
        social_media_url: "",
        home_city: "",
        home_country: "",
        organization_name: "",
        organization_url: "",
        organization_contact_name: "",
        organization_contact_email: "",
        organization_contact_phone: "",
        current_city: 'San Francisco',
        current_state: 'CA',
        current_country: 'US',
        completed_registration: null
      },
      request: {
        number_of_guests: 4,
        handicap_accessible: true,
        require_medical_attention: false,
        access_to_schools: true,
        supplemental_info: '',
        city: 'San Francisco',
        state: 'CA',
        country: 'US'
      }
    }
  }

  componentWillMount() {
    const refugeeId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchRefugee(refugeeId));
  }

  renderFullName() {
    return `${this.state.refugee.first_name} ${this.state.refugee.last_name}`;
  }

  renderLocation() {
    const {current_city, current_state, current_country} = this.state.refugee;
    return `${current_city}, ${current_state}`;
  }

  render() {
    const sliderSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <section className='carousel-container'>
          <Slider {...sliderSettings}>
            {this.state.refugee.images.map((imgUrl, i) =>
              <div key={i}><img src={imgUrl} style={{ width: '100%', minHeight: 220 }} /></div>
            )}
          </Slider>
        </section>
        <br />
        <section className='profile-container main-background-color'>
          <div className='profile-header'>Profile Hub</div>
          <div className='profile-body'>
            <MdLocationSearching size={80} />
            <div className='name-container'>
              <h2 className='name'>{this.renderFullName()}</h2>
              <MdLocationOn size={26} className='accent-color' style={{ verticalAlign: 'bottom', marginLeft: -5}} />{this.renderLocation()}
            </div>
          </div>
        </section>
        <br />
        <section className='profile-section'>
          <h3 className='accent-color'>ABOUT ME</h3>
          <p>{this.state.refugee.about}</p>
        </section>
        <br />
        <section className='profile-section'>
          <h3 className='accent-color'>CONTACT INFO</h3>
          <MdPhone className='contact main-color' size={30} />
           <MdEmail className='contact main-color' size={30} />
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ refugee }) => ({
  refugee
});

export default connect(mapStateToProps)(RefugeeProfile);
