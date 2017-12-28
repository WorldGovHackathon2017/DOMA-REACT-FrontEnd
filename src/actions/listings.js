import axios from 'axios';

export const fetchListings = (listingsId) => (dispatch) => {
  axios.get(`api/listings/`)
    .then(({data}) => dispatch(setListings(data)));

//   const listings = {
//     listings: []
//   };
//   dispatch(setListings(listings));
// };

// const setListings = (listings) => ({
//   type: 'SET_LISTINGS',
//   listings
// });