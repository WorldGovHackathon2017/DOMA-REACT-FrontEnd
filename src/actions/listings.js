import axios from 'axios';

export const fetchListings = (listingsId) => (dispatch) => {
  // axios.get(`api/refugees/${refugeeId}`)
  //   .then(({data}) => dispatch(setRefugee(data)));

  // temporarily untill api can be used.
  const listings = {
    listings: []
  };
  dispatch(setListings(listings));
};

const setListings = (listings) => ({
  type: 'SET_LISTINGS',
  listings
});