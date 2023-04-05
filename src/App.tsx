import React from 'react';
import Items from './components/Items';
import Header from './components/Header';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchAllMovie } from './redux/allMovie/asyncActions';

const App = () => {
	const state = useAppSelector((state) => state.allMovie);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAllMovie());
	}, []);
	return (
		<>
			<Header />
      <Items />
		</>
	);
};

export default App;
