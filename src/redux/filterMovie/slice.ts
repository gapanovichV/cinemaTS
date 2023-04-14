import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterType } from './types';

const initialState: FilterType = {
	currentPage: 1,
	name: '',
};

export const FilterMovieSlice = createSlice({
	name: 'filterMovie',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSearchName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
	},
});

export const { setCurrentPage, setSearchName } = FilterMovieSlice.actions;
export default FilterMovieSlice.reducer;
