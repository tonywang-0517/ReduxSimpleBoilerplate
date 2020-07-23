import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import demoReducer from '../reducers/demoReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    example: demoReducer,
  });

export default rootReducer;
