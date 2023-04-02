import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './MovieSlice';

export const store = configureStore({
	reducer: {
		allMovie: movieSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
