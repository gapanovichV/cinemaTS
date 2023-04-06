import React from 'react';
import { Movie } from '../redux/allMovie/types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const MovieCard: React.FC<Movie> = ({ id, name, description, poster }) => {
	return (
		<>
			<CardActionArea sx={{ width: 300, height: 700, color: 'grey' }}>
				<Card sx={{ width: 300, height: 700 }}>
					<CardMedia component="img" height="500" image="" alt="картинка" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{id} {name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
					</CardContent>
				</Card>
			</CardActionArea>
		</>
	);
};
