import { configureStore } from '@reduxjs/toolkit'
import { flatsReducer } from './reducers/flatsReducer';
import { alertsReducer } from './reducers/alertsReducer';


const store = configureStore({
  reducer: {
    flatsReducer: flatsReducer,
    alertsReducer: alertsReducer
  }
})

export default store
