import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Card = () => {
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
      </Grid>
		</Box>
	);
};

export default Card;
