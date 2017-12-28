import axios from 'axios';

export const fetchRequests = (requestsId) => (dispatch) => {
  axios.get(`api/requests`)
    .then(({data}) => dispatch(setRequests(data)));

  // temporarily untill api can be used.
//   const requests = {
//     requests: []
//   };
//   dispatch(setRequests(requests));
};

const setRequests = (requests) => ({
  type: 'SET_REQUESTS',
  fetchRequests
});