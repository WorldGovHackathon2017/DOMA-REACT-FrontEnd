import axios from 'axios';

export const fetchHost = (hostId) => (dispatch) => {
  axios.get(`api/hosts/${hostId}`)
    .then(({data}) => dispatch(setHost(data)));

  // temporarily until api can be used.
  // const host = {
  //   name: 'Test'
  // };
  // dispatch(setHost(host));
};

const setHost = (host) => ({
  type: 'SET_HOST',
  fetchHost
});