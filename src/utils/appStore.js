import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import liveChatSlice from "./liveCharSlice";
import searchSlice from "./searchSlice";


const appStore = configureStore({
    reducer: {
        app: appSlice, 
        search: searchSlice,
        chat: liveChatSlice
    }
})

export default appStore;