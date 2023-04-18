import React, { useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import { fetchAllMovie } from '../redux/allMovie/asyncActions';

import { selectFilterMovieData } from '../redux/filterMovie/selector';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { setCurrentPage, setSearchName } from '../redux/filterMovie/slice';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: theme.spacing(2),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

export const Header: React.FC<LinkProps> = () => {
	const { currentPage } = useSelector(selectFilterMovieData);
	const dispatch = useAppDispatch();

	const [value, setValue] = React.useState('');

	const searchByName = () => {
		dispatch(setSearchName(value));
		dispatch(
			fetchAllMovie({
				currentPage: currentPage,
				name: value,
			}),
		);
	};

	const handleKeyDown = (e: { keyCode: number }) => {
		if (e.keyCode === 13) searchByName();
	};

	const handleClickMenu = () => {
		setValue('');
		dispatch(setSearchName(''));
		dispatch(setCurrentPage(1));
		dispatch(
			fetchAllMovie({
				currentPage: 1,
				name: '',
			}),
		);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Link onClick={handleClickMenu} style={{ color: 'white' }} to={'/'}>
							MUI
						</Link>
					</Typography>
					<Search>
						<SearchIconWrapper></SearchIconWrapper>
						<Link style={{ color: 'white' }} to={'/'}>
							<StyledInputBase
								value={value}
								onChange={(e) => setValue(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder="Search…"
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Link>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
