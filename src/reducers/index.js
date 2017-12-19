import { combineReducers } from 'redux';
import hosts from './hosts';
import refugees from './refugees';

export default combineReducers({
  hosts,
  refugees
});
