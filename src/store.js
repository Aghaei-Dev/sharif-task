import { configureStore } from '@reduxjs/toolkit'
import { postSlice } from './features'
export const store = configureStore({
  reducer: {
    post: postSlice,
  },
})
