import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user.js';
import basketReducer from './slice/basket.js';

export default configureStore({
  reducer: {    
    user: userReducer,
    basket: basketReducer
  },
});

