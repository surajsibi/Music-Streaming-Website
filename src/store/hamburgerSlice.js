import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    leftStatus:true,
    
}

const hamburgerSlice = createSlice({
    name:"hamburger",
    initialState,
    reducers:{
      switcher:(state)=>{
        state.leftStatus = !state.leftStatus
          }
            }
})
export const {switcher,homep} = hamburgerSlice.actions

export default hamburgerSlice.reducer;