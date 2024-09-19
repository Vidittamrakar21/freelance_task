import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogslice';
import allblogReducer from './allblogslice'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    allblog: allblogReducer,
  },
});