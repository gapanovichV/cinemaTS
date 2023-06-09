import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Doc } from './types';
import { FilterType } from '../filterMovie/types';

const API = import.meta.env.VITE_API_MOVIE;
const URL = import.meta.env.VITE_API_URL;

export const fetchAllMovie = createAsyncThunk<Doc, FilterType>(
	'movie/fetchAllMovie',
	async (params: FilterType) => {
		const { currentPage, name } = params;
		const res = await axios.get<Doc>(`${URL}/movie`, {
			params: {
				token: API,
				limit: 14,
				page: currentPage,
				name: name,
			},
		});
		return res.data;
	},
);
