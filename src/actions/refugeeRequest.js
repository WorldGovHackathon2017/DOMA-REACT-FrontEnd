import axios from 'axios';

export const fetchRefugeeRequest = (refugeeRequestId) => (dispatch) => {
  // axios.get(`api/requests/${refugeeRequestId}`)
  //   .then(({data}) => dispatch(setRefugeeRequest(data)));

  // temporarily untill api can be used.
  const refugeeRequest = {
    name: 'Test'
  };
  dispatch(setRefugeeRequest(refugeeRequest));
};

const setRefugeeRequest = (refugeeRequest) => ({
  type: 'SET_REFUGEE_REQUEST',
  refugeeRequest
});
