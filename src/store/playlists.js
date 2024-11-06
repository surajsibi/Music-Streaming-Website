import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    havePlaylist:false,
    noOfPlaylist:null,
}

const playlistSlice = createSlice({
    name:"playlist",
    initialState,
    reducers:{
        createPlaylist:(state,action) =>{
            state.havePlaylist = true
            state.noOfPlaylist = action.payload.noOfPlaylist
        }
        
    }
})
