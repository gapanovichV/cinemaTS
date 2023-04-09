import React from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../redux/allMovie/types';
import { cleanerDescr, isPoster, cleanerTitle } from '../service/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const MovieCard: React.FC<Movie> = ({ id, name, alternativeName, description, poster }) => {
	return (
		<Link to={`/post/${id}`}>
			<CardActionArea sx={{ width: 300, height: 700, color: 'grey' }}>
				<Card sx={{ width: 300, height: 700 }}>
					<CardMedia component="img" height="500" image={isPoster(poster)} alt="картинка" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{id}
							{cleanerTitle(name, alternativeName)}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{cleanerDescr(description)}
						</Typography>
					</CardContent>
				</Card>
			</CardActionArea>
		</Link>
	);
};