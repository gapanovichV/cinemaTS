import React from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {useAppDispatch} from '../redux/store';
import {useAuth} from '../hooks/use-auth';
import {fetchAllMovie} from '../redux/allMovie/asyncActions';
import {setCurrentPage, setSearchName} from '../redux/filterMovie/slice';
import {selectFilterMovieData} from '../redux/filterMovie/selector';

import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Search = styled('div')(({theme}) => ({
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
const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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
  const {isAuth} = useAuth()
  const {currentPage} = useSelector(selectFilterMovieData);
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<string>('');

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
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            <Link onClick={handleClickMenu} style={{color: 'white'}} to={'/'}>
              MUI
            </Link>
          </Typography>
          {isAuth ? <Search>
            <SearchIconWrapper></SearchIconWrapper>
            <Link style={{color: 'white'}} to={'/'}>
              <StyledInputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}

              />
            </Link>
          </Search> : null}
          <Link to={'/login'}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon/>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
