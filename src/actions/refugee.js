import axios from 'axios';
import { setRequest } from './request';

export const fetchRefugee = (refugeeId) => (dispatch) => {
  axios.get(`/api/refugees/${refugeeId}`)
    .then(({data}) => {
      let refugee = data;
      dispatch(setRequest(refugee.requests[0])); //Change the array to obj later
      refugee.requests = null;
      dispatch(setRefugee(refugee));
    });
};

const setRefugee = (refugee) => ({
  type: 'SET_REFUGEE',
  refugee
});
