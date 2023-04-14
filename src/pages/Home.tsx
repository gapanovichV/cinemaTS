import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../redux/store';
import { Movie, Status } from '../redux/allMovie/types';
import { fetchAllMovie } from '../redux/allMovie/asyncActions';
import { selectAllMovieData } from '../redux/allMovie/selector';
import { selectFilterMovieData } from '../redux/filterMovie/selector';

import { MovieCard } from './MovieCard';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Pagination } from '../components/Pagination/Paganation';
import { setCurrentPage } from '../redux/filterMovie/slice';
import { useParams } from 'react-router-dom';

export const Home: React.FC = () => {
	const { data, status } = useSelector(selectAllMovieData);
	const { currentPage, name } = useSelector(selectFilterMovieData);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(
			fetchAllMovie({
				currentPage: currentPage,
				name: name,
			}),
		);
	}, [currentPage]);

	const onChangePage = (page: number) => {
		dispatch(setCurrentPage(page));
	};

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
			<Pagination currentPage={currentPage} onChangePage={onChangePage} alsoPage={data.pages} />
		</Box>
	);
};
