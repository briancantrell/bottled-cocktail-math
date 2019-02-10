import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import ingredients from './ingredients';
import bottles from './bottles';
import dilutionProfile from './dilution_profile';
import totals from './totals';

 const combinedReducers = combineReducers({
  ingredients,
  bottles,
  dilutionProfile,
});

export default reduceReducers(combinedReducers, totals)