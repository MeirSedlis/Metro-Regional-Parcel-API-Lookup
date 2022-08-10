import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchByCountyPIN } from './lookupAPI';

const initialState = {
    value: 0,
    status: 'idle',
  };

  export const lookupByCountyPIN = createAsyncThunk(
    'lookup/fetchByCountyPIN',
    async (PIN) => {
        // const response = await fetchByCountyPIN(PIN);
        // return response.data;
        console.log(PIN)
    }
  );