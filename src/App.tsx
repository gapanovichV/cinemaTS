import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Card />
			</QueryClientProvider>
		</>
	);
};

export default App;
