import { Status } from '../redux/allMovie/types';
import { useSelector } from 'react-redux';
import { selectMovieData } from '../redux/allMovie/selector';
import { MovieCard } from './MovieCard';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

export const Home: React.FC = () => {
	const { data, status } = useSelector(selectMovieData);

	const movie = data.docs.map((obj: any) => <MovieCard key={obj.id} {...obj} />);
  
	return (
		<Box sx={{ padding: 5, paddingTop: 10, bgcolor: "#e1e4e8" }}>
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
