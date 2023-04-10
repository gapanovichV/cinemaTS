import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { FullMovie } from './pages/FullMovie';
import { Layout } from './pages/Layout';

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
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
