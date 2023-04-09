import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterType } from './types';

const initialState: FilterType = {
	currentPage: 1,
};

export const FilterMovieSlice = createSlice({
	name: 'filterMovie',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
});

export const { setCurrentPage } = FilterMovieSlice.actions;
export default FilterMovieSlice.reducer;
