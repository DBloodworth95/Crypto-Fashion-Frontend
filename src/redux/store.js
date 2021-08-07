import { configureStore } from '@reduxjs/toolkit';
import ShirtReducer from './shirtReducer';

export const store = configureStore({
  reducer: {
    shirtReducer: ShirtReducer,
  },
});
