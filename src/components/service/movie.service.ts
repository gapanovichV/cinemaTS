import axios from 'axios';

export const MovieService = {
	async getAll() {
		try {
			const res = await axios.get('https://api.kinopoisk.dev/movie', {
				params: {
					token: '',
				},
			});
			return res.data;
		} catch (error) {}
	},
};
