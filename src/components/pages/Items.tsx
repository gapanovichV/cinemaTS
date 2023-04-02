import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Items = () => {
	return (
		<Grid
			sx={{ padding: 5, paddingTop: 15 }}
			container
			gap={15}
			direction="row"
			justifyContent="center"
			alignItems="stretch"
		>
			<Grid>
				<CardMedia component="img" height="600" image={''} alt="green iguana" />
			</Grid>
      <Grid xs={4} >
				<CardContent>
					<Typography gutterBottom variant="h3" component="div">
						name
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
						Год: year
					</Typography>
					<Typography variant="body2" color="text.secondary">
						descr
					</Typography>
				</CardContent>
			</Grid>
		</Grid>
	);
};

export default Items;
