import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from './typeMovie';
import { SearchMovieParams } from './typeMovie';

export const fetchAllMovie = createAsyncThunk<Movie>(
	'movie/fetchAllMovie',
	async () => {
		const { data } = await axios.get<Movie>('https://api.kinopoisk.dev/movie', {
			params: {
				token: '',
				limit: 20,
			},
		});
		console.log(data);
		return data;
	},
);
