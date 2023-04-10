import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import allMovieSlice from './allMovie/slice';
import singleMovieSlice from './SingleMovie/slice';
import FilterMovieSlice from './filterMovie/slice';

export const store = configureStore({
	reducer: {
		allMovie: allMovieSlice,
		singleMovie: singleMovieSlice,
		filter: FilterMovieSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
