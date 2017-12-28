import axios from 'axios';

export const fetchHostListing = (hostListingId) => (dispatch) => {
  // axios.get(`api/refugees/${refugeeId}`)
  //   .then(({data}) => dispatch(setRefugee(data)));

  // temporarily untill api can be used.
  const hostListing = {
    name: 'Test'
  };
  dispatch(setHostListing(hostListing));
};

const setHostListing = (hostListing) => ({
  type: 'SET_HOST_LISTING',
  hostListing
});