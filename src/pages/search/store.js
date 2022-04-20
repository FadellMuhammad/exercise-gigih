import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './actions'

export default configureStore({
  reducer: {
    api: apiSlice
  },
})