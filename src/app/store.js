import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tagsSlice';

export default configureStore({
  reducer: {
    tags: tagsReducer,
  },
});
