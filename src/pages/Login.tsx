import React from "react";

import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "../redux/store";
import { setUser } from "../redux/user/slice";

export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({ email: user.email, token: "55", id: user.uid }));
        navigate("/");
      })
      .catch(console.error);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Box
      sx={{
        background: "gray",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            maxWidth: 500,
            padding: 12,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            background: "#fff",
            gap: 3,
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "text.secondary", mb: 2 }}
          >
            Вход в аккаунт
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              justifyContent: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              id="email"
              label="Email"
              autoComplete="off"
              type="email"
              {...register("email", { required: true })}
            />
            <TextField
              id="password"
              label="Пароль"
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-off-fill" />
                      ) : (
                        <Icon icon="eva:eye-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained">
              Войти
            </Button>
          </form>

          <Typography variant="body2" align="center">
            Нет аккаунта?{" "}
            <Link component={RouterLink} to={"/signup"}>
              Регистрация
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
