import React from 'react';

import { Home } from './components/Home';
import { Header } from './components/Header';

import { useAppDispatch } from './redux/store';
import { fetchAllMovie } from './redux/allMovie/asyncActions';
import { fetchSingleMovie } from './redux/SingleMovie/asyncActions';

const App = () => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
    dispatch(fetchAllMovie())
    dispatch(fetchSingleMovie(901914))
	}, []);

	return (
		<>
			<Header />
			<Home />
		</>
	);
};

export default App;
