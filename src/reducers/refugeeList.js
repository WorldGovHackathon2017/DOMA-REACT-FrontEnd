
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REQUESTS':
      return action.refugeeList;
    default:
      return state;
  }
}
