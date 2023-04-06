import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Doc, SearchMovieParams } from './types';

const API = import.meta.env.VITE_API_MOVIE;
const URL = import.meta.env.VITE_API_URL;

export const fetchAllMovie = createAsyncThunk<Doc>('movie/fetchAllMovie', async () => {
	const { data } = await axios.get<Doc>(`${URL}/movie`, {
		params: {
			token: API,
			limit: 20,
		},
	});
	return data;
});
