import { useSelector } from 'react-redux';

import { Movie, Status } from '../redux/allMovie/types';
import { selectAllMovieData } from '../redux/allMovie/selector';

import { MovieCard } from './MovieCard';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const Home: React.FC = () => {
	const { data, status } = useSelector(selectAllMovieData);

	const movie = data.docs.map((obj: Movie) => <MovieCard key={obj.id} {...obj} />);

	return (
		<Box sx={{ padding: 5, paddingTop: 10 }}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				gap={2}
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{status === Status.ERROR ? <h1>Произошла ошибка не удалось получать данные</h1> : movie}
			</Grid>
		</Box>
	);
};
