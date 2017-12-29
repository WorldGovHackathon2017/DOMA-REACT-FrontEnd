import { combineReducers } from 'redux';
import hostList from './hostList';
import refugeeList from './refugeeList';
import refugee from './refugee';
import host from './host';
import user from './user';
import refugeeRequest from './refugeeRequest';

export default combineReducers({
  hostList,
  refugeeList,
  host,
  refugee,
  refugeeRequest,
  user
});
