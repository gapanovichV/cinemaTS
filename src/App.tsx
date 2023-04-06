import React from 'react';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { useAppDispatch } from './redux/hooks';
import { fetchAllMovie } from './redux/allMovie/asyncActions';

const App = () => {
  const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAllMovie());
	}, []);
	return (
		<>
			<Header />
			<Home />
		</>
	);
};

export default App;
