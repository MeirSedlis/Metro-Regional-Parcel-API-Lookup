import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByCountyPIN } from "./lookupAPI";

const initialState = {
  value: "",
  status: "idle",
};

export const lookupSlice = createSlice({
  name: "lookup",
  initialState,
  reducers: {
    aNumberPre: (state, action) => {
      state.value += action.payload;
    },
    aNumber: (state, action) => {
      state.value += action.payload;
    },
    aNumberSuf: (state, action) => {
      state.value += action.payload;
    },
    stPreMod: (state, action) => {
      state.value += action.payload;
    },
    stPreDir: (state, action) => {
      state.value += action.payload;
    },
    stPreTyp: (state, action) => {
      state.value += action.payload;
    },
    stPreSep: (state, action) => {
      state.value += action.payload;
    },
    stName: (state, action) => {
      state.value += action.payload;
    },
    stPosTyp: (state, action) => {
      state.value += action.payload;
    },
    stPosDir: (state, action) => {
      state.value += action.payload;
    },
    zip: (state, action) => {
      state.value += action.payload;
    },
    city: (state, action) => {
      state.value += action.payload;
    },
    county: (state, action) => {
      state.value += action.payload;
    },
    stateShort: (state, action) => {
      state.value += action.payload;
    },
    ownerName: (state, action) => {
      state.value += action.payload;
    },
    totalValue: (state, action) => {
      state.value += action.payload;
    },
  },
});
