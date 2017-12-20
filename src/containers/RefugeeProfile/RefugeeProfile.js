import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRefugee } from '../../actions/refugee';

class RefugeeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refugee: {
        name: ""
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
