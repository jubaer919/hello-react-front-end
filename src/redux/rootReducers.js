import { combineReducers } from '@reduxjs/toolkit';
import randomMessage from './Welcome/greetingsSlice';

const rootReducer = combineReducers({
  Random: randomMessage,
});

export default rootReducer;
