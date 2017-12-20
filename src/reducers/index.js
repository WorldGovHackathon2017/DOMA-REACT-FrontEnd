import { combineReducers } from 'redux';
import hostList from './hostList';
import refugeeList from './refugeeList';
import refugee from './refugee';
import host from './host';
import user from './user';

export default combineReducers({
  hostList,
  refugeeList,
  host,
  refugee,
  user
});
