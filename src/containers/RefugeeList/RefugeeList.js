import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRefugeeList } from '../../actions/refugeeList';

class Requests extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRefugeeList());
  }

  render() {
    return (
      <div class='requests-container'>

      </div>
    );
  }
}

const mapStateToProps = ({refugeeList}) => ({
  refugeeList
});

export default connect(mapStateToProps)(Requests);
