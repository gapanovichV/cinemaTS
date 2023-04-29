import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

export const HomeNotAuth = () => {
  return (
    <Box sx={{ padding: 5, paddingTop: 10 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Typography variant="h3">Авторизуйтесь на сайте</Typography>
        <Button component={RouterLink} to="/login" variant="contained">
          Войти
        </Button>
      </Grid>
    </Box>
  );
};
