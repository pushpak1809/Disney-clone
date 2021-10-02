//whole global state of my disney movie and then its providing all the data in to every single state=> is called category;

import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducers/MovieReducer";
import UserReducer from "../Reducers/UserReducer";

export const Store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: UserReducer,
  },
});
