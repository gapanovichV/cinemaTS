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
		setCurrentPage(state: FilterType, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSearchName(state: FilterType, action: PayloadAction<string>) {
			state.name = action.payload;
		},
	},
});

export const { setCurrentPage, setSearchName } = FilterMovieSlice.actions;
export default FilterMovieSlice.reducer;
