import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {
  MdLocationSearching,
  MdLocationOn,
  MdPhone,
  MdEmail
} from 'react-icons/lib/md';
import './RefugeeProfile.css';
import RefugeeRequest from '../RefugeeRequest/RefugeeRequest';
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
      }
    }
  }

  componentWillMount() {
    const refugeeId = this.props.match.params.id;
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
      <div className="profile-page-container">
        <Card>
          <section className='carousel-container'>
            <Slider {...sliderSettings}>
              {this.state.refugee.images.map((imgUrl, i) =>
                <div key={i}>
                  <img src={imgUrl} style={{ width: '100%', minHeight: 230 }} />
                </div>
              )}
            </Slider>
          </section>
          <section className='profile-container main-background-color'>
            <h3 className='profile-header'>Profile Hub</h3>
            <div className='profile-body'>
              <MdLocationSearching size={80} />
              <div className='name-container'>
                <h2 className='name'>{this.renderFullName()}</h2>
                <MdLocationOn
                  size={26}
                  className='accent-color'
                  style={{ verticalAlign: 'bottom', marginLeft: -5}}
                />
                  {this.renderLocation()}
              </div>
            </div>
          </section>
          <section className='profile-section'>
            <h3 className='accent-color'>ABOUT ME</h3>
            <p>{this.state.refugee.about}</p>
          </section>
          <section className='profile-section'>
            <h3 className='accent-color'>CONTACT INFO</h3>
            <MdPhone className='contact main-color' size={30} />
             <MdEmail className='contact main-color' size={30} />
          </section>
          <RefugeeRequest refugeeId={this.props.match.params.id}/>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ refugee }) => ({
  refugee
});

export default connect(mapStateToProps)(RefugeeProfile);
