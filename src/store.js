import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice.js";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
