import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import randoTacoReducer from './randoTacoReducer';
import baseLayersReducer from './baseLayersReducer';
import mixinsReducer from './mixinsReducer';
import seasoningsReducer from './seasoningsReducer';
import condimentsReducer from './condimentsReducer';
import shellsReducer from './shellsReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer,
  randoTaco: randoTacoReducer,
  baseLayers: baseLayersReducer,
  mixins: mixinsReducer,
  seasonings: seasoningsReducer,
  condiments: condimentsReducer,
  shells: shellsReducer
});

export default rootReducer