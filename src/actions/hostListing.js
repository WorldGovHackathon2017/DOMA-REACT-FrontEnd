import axios from 'axios';

export const fetchHostListing = (hostListingId) => (dispatch) => {
  axios.get(`api/listings/${hostListingId}`)
    .then(({data}) => dispatch(setHostListing(data)));

  // temporarily until api can be used.
//   const hostListing = {
//     name: 'Test'
//   };
//   dispatch(setHostListing(hostListing));
};

const setHostListing = (hostListing) => ({
  type: 'SET_HOST_LISTING',
  fetchHostListing
});