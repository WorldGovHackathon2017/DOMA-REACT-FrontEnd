
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_REFUGEE':
      return action.refugee;
    default:
      return state;
  }
};
