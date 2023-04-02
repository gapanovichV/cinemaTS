import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
