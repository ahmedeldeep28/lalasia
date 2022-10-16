import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/userSlice';
import  cartSlice  from './slice/cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice
  },
})
export default store
