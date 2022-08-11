import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: "",
  status: "idle",
};


export const lookupSlice = createSlice({
  name: "lookup",
  initialState: [],
  reducers: {
   setResults: {
    reducer: (state, action) => {
      state.push(action.payload)
    }
   }
  },
});

export default lookupSlice.reducer