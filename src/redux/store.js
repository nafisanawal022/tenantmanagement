import { configureStore } from '@reduxjs/toolkit';
import { flatsReducer } from './reducers/flatsReducer';
import { alertsReducer } from './reducers/alertsReducer';
import { usersReducer } from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    flatsReducer: flatsReducer,
    alertsReducer: alertsReducer,
    usersReducer: usersReducer
  }
});

export default store;
