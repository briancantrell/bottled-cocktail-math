import { combineReducers } from 'redux';
import ingredients from './ingredients';
import bottles from './bottles';
import dilutionProfile from './dilution_profile';

export default combineReducers({
  ingredients,
  bottles,
  dilutionProfile
});

