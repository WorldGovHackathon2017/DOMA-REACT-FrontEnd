import axios from 'axios';

export const fetchRefugee = (refugeeId) => (dispatch) => {
  // axios.get(`api/refugees/${refugeeId}`)
  //   .then(({data}) => dispatch(setRefugee(data)));

  // temporarily untill api can be used.
  const refugee = {
    name: 'Test'
  };
  dispatch(setRefugee(refugee));
};

const setRefugee = (refugee) => ({
  type: 'SET_REFUGEE',
  refugee
});
