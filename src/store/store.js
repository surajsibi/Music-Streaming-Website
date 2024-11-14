import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import hamburgerSclice from './hamburgerSlice'
import genreSlice from './genreSlice'



const store = configureStore({
    reducer:{
        auth:authSlice,
        hamburger:hamburgerSclice,
        genre:genreSlice

    },
})

export default store;