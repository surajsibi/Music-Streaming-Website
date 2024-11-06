import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import hamburgerSclice from './hamburgerSlice'



const store = configureStore({
    reducer:{
        auth:authSlice,
        hamburger:hamburgerSclice

    },
})

export default store;