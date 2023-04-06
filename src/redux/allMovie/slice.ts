import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllMovie } from './asyncActions';
import { Doc, MovieSliceState, Status } from './types';

const initialData = { docs: [], total: 0, limit: 0, page: 0, pages: 0 };

const initialState: MovieSliceState = {
	data: initialData,
	status: Status.LOADING,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Doc>) {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllMovie.pending, (state, action) => {
			state.data = initialData;
			state.status = Status.LOADING;
		});
		builder.addCase(fetchAllMovie.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchAllMovie.rejected, (state, action) => {
			state.data = initialData;
			state.status = Status.ERROR;
		});
	},
});

export const { setItems } = movieSlice.actions;
export default movieSlice.reducer;
