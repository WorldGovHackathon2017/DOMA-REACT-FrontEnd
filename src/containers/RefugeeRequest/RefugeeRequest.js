import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRefugeeRequest } from '../../actions/refugeeRequest';
import './RefugeeRequest.css';

class RefugeeRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      request: {
        handicap_accessible: null,
        require_medical_attention: null,
        access_to_schools: null,
        organization_name: "",
        organization_url: "",
        organization_contact_name: "",
        organization_contact_email: "",
        organization_contact_phone: "",
        number_of_guests: null,
        city: "",
        state: "",
        country: "",
        photo_url: "",
        completed_request: null,
        refugee: {},
        amenity: {}
      }
    }
  }

  componentWillMount() {
    const refugeeRequestId = 1; // temporarily untill api can be used.
    this.props.dispatch(fetchRefugeeRequest(refugeeRequestId));
  }

  render() {
    console.log(this.props.request);
    return (
      <div className="refugee-request">

      </div>
    )
  }
}

const mapStateToProps = ({ refugeeRequest }) => ({
  refugeeRequest
});

export default connect(mapStateToProps)(RefugeeRequest);