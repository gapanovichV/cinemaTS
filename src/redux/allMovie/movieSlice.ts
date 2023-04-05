import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllMovie } from './asyncActions';
import { Status, movieSliceState } from '../types';
import { Movie } from './typeMovie';

const initialState = {
	items: {},
	status: Status.LOADING,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllMovie.pending, (state, action) => {
			state.status = Status.LOADING;
			state.items = {};
		});
		builder.addCase(fetchAllMovie.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.items = action.payload;
		});
		builder.addCase(fetchAllMovie.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.items = {};
		});
	},
});

export const { setItems } = movieSlice.actions;
export default movieSlice.reducer;
