import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppSelector } from '../redux/hooks';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Status } from '../redux/types';
import { Doc, Movie } from '../redux/allMovie/typeMovie';

const Items = () => {
	const state = useAppSelector((state) => state.allMovie);
	const test: Movie  = state.items.docs;
	console.log('state', test);
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
				{state.status === Status.SUCCESS && test.map((obj) => (
					<div key={obj.id}>
						<CardActionArea sx={{ width: 300, height: 700, color: 'grey' }}>
							<Card sx={{ width: 300, height: 700 }}>
								<CardMedia component="img" height="500" image={obj.poster} alt="green iguana" />
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{obj.id}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{obj.description}
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</div>
				))}
			</Grid>
		</Box>
	);
};

export default Items;
