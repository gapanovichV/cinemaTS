import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchSingleMovie } from './asyncActions';
import { Status } from '../typeGlobal';
import { SingleMovie, singleMovieState } from './types';

const initialState: singleMovieState = {
	data: {} as SingleMovie,
	status: Status.LOADING,
};

export const singleMovieSlice = createSlice({
	name: 'singleMovie',
	initialState,
	reducers: {
		setItems(state: singleMovieState, action: PayloadAction<SingleMovie>) {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSingleMovie.pending, (state: singleMovieState, action) => {
			state.data = {} as SingleMovie;
			state.status = Status.LOADING;
		});
		builder.addCase(fetchSingleMovie.fulfilled, (state: singleMovieState, action) => {
			state.data = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchSingleMovie.rejected, (state: singleMovieState, action) => {
			state.data = {} as SingleMovie;
			state.status = Status.ERROR;
		});
	},
});

export const { setItems } = singleMovieSlice.actions;
export default singleMovieSlice.reducer;
