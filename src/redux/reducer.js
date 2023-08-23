import { combineReducers } from '@reduxjs/toolkit';
import { reducer as reduxFormReducer } from 'redux-form';
import upcomingEventsReducer from './reducers/jsonHelpReducer';

export const reducers = combineReducers({
  form: reduxFormReducer,
  upcomingEvents: upcomingEventsReducer
});
