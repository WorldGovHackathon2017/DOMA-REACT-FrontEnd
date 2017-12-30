import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdPermIdentity,
  MdPeopleOutline,
  MdAccessible,
  MdLocalHospital,
  MdSchool,
  MdLocalRestaurant
} from 'react-icons/lib/md';
import { fetchrequest } from '../../actions/request';
import Amenity from '../../components/Amenity/Amenity';
import './Request.css';


class Request extends Component {
  constructor(props) {
    super(props)

    this.state = {
      request: {
        handicap_accessible: null,
        require_medical_attention: true,
        access_to_schools: null,
        organization_name: "",
        organization_url: "",
        organization_contact_name: "",
        organization_contact_email: "",
        organization_contact_phone: "",
        number_of_guests: 4,
        city: "",
        state: "",
        country: "",
        photo_url: "",
        supplemental_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
        completed_request: null,
        amenity: {
         heat: false,
         air_conditioning: false,
         washer: true,
         dryer: false,
         drawers: true,
         bikes: true,
         wifi: false,
         computer: true,
         phone: true,
         tv: false,
         transportation: false,
         pet_friendly: false,
         family_friendly: true,
         baby_friendly: false,
         toddler_friendly: false,
         child_friendly: true,
         teen_friendly: false,
         elderly_friendly: false
        }
      }
    }
  }

  render() {
    console.log(this.props.request);
    return (
      <div>
        <div className='request-header-container main-background-color'>
          <h3 className='request-header'>
            REQUEST
          </h3>
          <section className='request-info'>
            { this.state.request.number_of_guests === 1 ?
              <MdPermIdentity size={40} className='request-icon' /> : <MdPeopleOutline size={40} className='request-icon' />
            }
            <span style={{ fontSize: 26 }}>{this.state.request.number_of_guests}</span>
            <div>Guests</div>
          </section>
          <section className='request-info'>
              <MdLocalRestaurant
                size={40}
                className='request-icon'
                style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }}
              />
            <div style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }} >Meals</div>
          </section>
          <section className='request-info'>
              <MdAccessible
                size={40}
                className='request-icon'
                style={{ opacity: this.state.request.handicap_accessible ? 1 : 0.4 }}
              />
            <div style={{ opacity: this.state.request.handicap_accessible ? 1 : 0.4 }} >Accesible</div>
          </section>
          <section className='request-info'>
              <MdLocalHospital
                size={40}
                className='request-icon'
                style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }}
              />
            <div style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }} >Medical Care</div>
          </section>
          <section className='request-info'>
              <MdSchool
                size={40}
                className='request-icon'
                style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }}
              />
            <div style={{ opacity: this.state.request.require_medical_attention ? 1 : 0.4 }} >School</div>
          </section>
        </div>
        <Amenity {...this.props.request.amenity} />
        <section className='suppelemntal-info'>
          <h3 className='accent-color'>SUPPELEMENTAL INFO</h3>
          <p>{this.state.request.supplemental_info}</p>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ request }) => ({
  request
});

export default connect(mapStateToProps)(Request);
