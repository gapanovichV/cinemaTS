import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SingleMovie } from './types';

const API = import.meta.env.VITE_API_MOVIE;
const URL = import.meta.env.VITE_API_URL;

export const fetchSingleMovie = createAsyncThunk<SingleMovie, number>(
	'movie/fetchSingleMovie',
	async (id: number) => {
		console.log('id', id);
		const { data } = await axios.get<SingleMovie>(`${URL}/movie/${666}`, {
			params: {
				token: API,
			},
		});
		console.log(`data`, data);
		return data;
	},
);
