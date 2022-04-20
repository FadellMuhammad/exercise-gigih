import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: {
      dataSearch: ''
    }
  },
  reducers: {
    addDataApi: (state, action) => {
      state.dataSearch = action.payload.data
    },
  },
})

export const { addDataApi } = apiSlice.actions

export default apiSlice.reducer