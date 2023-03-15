import { configureStore } from "@reduxjs/toolkit";
import  ApiCallReducer from './features/apiCall-slice'

export const store = configureStore({
  reducer: {
    apiCall: ApiCallReducer
  },
});
