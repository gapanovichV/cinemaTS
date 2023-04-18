import React from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../redux/allMovie/types';
import { cleanerDescr, isPoster, cleanerTitle } from '../service/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

const boxCircle = {
	background: '#0062cc',
  color: "white",
	width: 45,
	height: 45,
	borderRadius: 100,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center ',
	position: 'absolute',
	top: 5,
	right: 5,
};

export const MovieCard: React.FC<Movie> = ({
	id,
	name,
	alternativeName,
	description,
	poster,
	rating,
}) => {
	return (
		<Link to={`/post/${id}`}>
			<CardActionArea sx={{ width: 300, height: 700, color: 'grey' }}>
				<Card sx={{ width: 300, height: 700 }}>
					<Box sx={{ position: 'relative' }}>
						<CardMedia component="img" height="500" image={isPoster(poster)} alt="картинка" />
						<Typography sx={boxCircle}>{rating.kp.toFixed(2)}</Typography>
					</Box>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
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
