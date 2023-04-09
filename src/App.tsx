import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { FullMovie } from './pages/FullMovie';
import { Layout } from './pages/Layout';

import { useAppDispatch } from './redux/store';
import { fetchAllMovie } from './redux/allMovie/asyncActions';
import { fetchSingleMovie } from './redux/SingleMovie/asyncActions';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <div>Page not found</div>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/post/:id',
				element: <FullMovie />,
			},
		],
	},
]);

const App = () => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAllMovie());
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
