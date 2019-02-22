import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import randoTacoReducer from './randoTacoReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer,
  randoTaco: randoTacoReducer
});

export default rootReducer