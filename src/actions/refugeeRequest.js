import axios from 'axios';

export const fetchRefugeeRequest = (refugeeRequestId) => (dispatch) => {
  // axios.get(`api/refugees/${refugeeId}`)
  //   .then(({data}) => dispatch(setRefugee(data)));

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
