import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { MdPermIdentity, MdPeopleOutline, MdSchool } from 'react-icons/lib/md';
import './RefugeeProfile.css';
import { fetchRefugee } from '../../actions/refugee';

class RefugeeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refugee: {
        images: [
          'https://via.placeholder.com/1040x400', 'https://via.placeholder.com/1040x400', 'https://via.placeholder.com/1040x400', 'https://via.placeholder.com/1040x400'
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
    const {city, state, country} = this.state.refugee;
    return `${city}, ${state}, ${country}`;
  }

  render() {
    const sliderSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="refugee-profile">
        <Card>
          <Slider {...sliderSettings}>
            {this.state.refugee.images.map((imgUrl, i) =>
              <div key={i}><img src={imgUrl} style={{ width: '100%' }} /></div>
            )}
          </Slider>
          <div class='section-container'>
            <CardTitle
              title={this.renderFullName()}
              subtitle={this.renderLocation()}
            />
            <GridList cols={2} padding={1}>
              <GridTile>
                <CardText style={{ textAlign: 'left'}}>
                  <h2>About</h2>
                  <p>{this.state.refugee.about}</p>
                </CardText>
              </GridTile>
              <GridTile>
                <h2>Contact</h2>
              </GridTile>
            </GridList>
          </div>
          <GridList
            cols={2}
            cellHeight={400}
            padding={1}
          >
            <GridTile>
              <CardText style={{ textAlign: 'left'}}>
                <h2>Request</h2>
                <div>Number of guests</div>
                { this.state.request.number_of_guests === 1 ? <MdPermIdentity size={30}/> : <MdPeopleOutline size={30} />} {this.state.request.number_of_guests}
              </CardText>
            </GridTile>
            <GridTile>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.985551019!2d-122.50764018567142!3d37.75781499658446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOOCq-ODquODleOCqeODq-ODi-OCouW3niDjgrXjg7Pjg5Xjg6njg7PjgrfjgrnjgrM!5e0!3m2!1sja!2sca!4v1513817160681" width="100%" height="400" frameBorder="0" style={{ border: 0}} allowFullScreen></iframe>
            </GridTile>
          </GridList>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ refugee }) => ({
  refugee
});

export default connect(mapStateToProps)(RefugeeProfile);
