import { configureStore } from "@reduxjs/toolkit";
import { userAccountApi } from "./userAccountSlice";
import { budgetApi } from "./budgetSlice";
import appReducer from "./appSlice";
// import { baseApi } from './baseApi'; // Use this for future slices if you want to standardize createApi

const store = configureStore({
  reducer: {
    [userAccountApi.reducerPath]: userAccountApi.reducer,
    [budgetApi.reducerPath]: budgetApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAccountApi.middleware,
      budgetApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
