import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    isSideBarOpen: true
  },
  reducers: {
    toggleSideBar: state => {
      return { ...state, isSideBarOpen: !state.isSideBarOpen }
    },
    openSideBar: state => {
      return {...state, isSideBarOpen: true}
    },
    closeSideBar: state => {
      return {...state, isSideBarOpen: false}
    }
  }
})

export const { toggleSideBar, closeSideBar, openSideBar } = appSlice.actions

export default appSlice.reducer
