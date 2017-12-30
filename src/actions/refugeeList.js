import axios from 'axios';

export const fetchRefugeeList = (requestsId) => (dispatch) => {
  axios.get(`/api/refugees`)
    .then(({data}) => dispatch(setRefugeeList(data)));
};

const setRefugeeList = (refugeeList) => ({
  type: 'SET_REFUGEE_LIST',
  refugeeList
});
