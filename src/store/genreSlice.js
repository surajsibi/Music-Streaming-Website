import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: ""
}

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    updateGenre: (state, action) => {
      state.value = action.payload
    },
    clearValue:(state) =>{
        state.value = ""
    }
  }
})
export const { updateGenre, clearValue } = genreSlice.actions

export default genreSlice.reducer;