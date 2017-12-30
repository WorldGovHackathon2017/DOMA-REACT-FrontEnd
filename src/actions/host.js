import axios from 'axios';

export const fetchHost = (hostId) => (dispatch) => {
  axios.get(`/api/hosts/${hostId}`)
    .then(({data}) => dispatch(setHost(data)));
};

const setHost = (host) => ({
  type: 'SET_HOST',
  host
});
