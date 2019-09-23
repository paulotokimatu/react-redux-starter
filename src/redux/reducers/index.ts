import { combineReducers } from 'redux';
import templateReducer from './templateReducer';

const rootReducer = combineReducers({
  template: templateReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
