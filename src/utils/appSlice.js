import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    isSideBarOpen: true
  },
  reducers: {
    toggleSideBar: state => {
      return { ...state, isSideBarOpen: !state.isSideBarOpen }
    }
  }
})

export const { toggleSideBar } = appSlice.actions

export default appSlice.reducer
