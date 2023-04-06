import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Doc, SearchMovieParams } from './types';

export const fetchAllMovie = createAsyncThunk<Doc>('movie/fetchAllMovie', async () => {
	const { data } = await axios.get<Doc>('https://api.kinopoisk.dev/movie', {
		params: {
			token: 'A8XQ8TK-E4V4KB1-HZVNGXG-ED5ZQZY',
			limit: 20,
		},
	});
	return data;
});
