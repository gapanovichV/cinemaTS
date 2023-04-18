import React from 'react';

import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const Signup = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<Box
			sx={{
				background: 'gray',
				height: '100vh',
				display: 'grid',
				placeItems: 'center',
			}}
		>
			<Container maxWidth="sm">
				<Box
					sx={{
						maxWidth: 500,
						padding: 12,
						margin: 'auto',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						background: '#fff',
						gap: 3,
					}}
				>
					<Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}>
						Регистрация
					</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{ gap: 14, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
					>
						<TextField
							id="outlined"
							label="Логин"
							autoComplete="off"
							type="name"
							{...register('login', { required: true })}
						/>
						<TextField
							id="outlined"
							label="Пароль"
							autoComplete="current-password"
							{...register('password', { required: true })}
						/>
						<TextField
							id="outlined"
							label="Почта"
							autoComplete="off"
							type="email"
							{...register('email', { required: true })}
						/>
						<Button type="submit" variant="contained">
							Зарегистрироваться
						</Button>
					</form>
					<Typography variant="body2" align="center">
						Нет аккаунта?{' '}
						<Link component={RouterLink} to={'/login'}>
							Войти
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
