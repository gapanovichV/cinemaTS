import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Status } from "../redux/typeGlobal";
import { isPoster } from "../service/service";
import { useAppDispatch } from "../redux/store";
import { fetchSingleMovie } from "../redux/SingleMovie/asyncActions";
import { selectSingleMovieData } from "../redux/SingleMovie/selector";

import Grid from "@mui/material/Unstable_Grid2";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export const FullMovie: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, status } = useSelector(selectSingleMovieData);

  React.useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchSingleMovie(Number(id)));
    } else {
      <Link to=".." />;
    }
  }, [id]);

  return (
    <Grid
      sx={{ padding: 5, paddingTop: 15 }}
      container
      gap={15}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      {status === Status.ERROR ? (
        <h1>ERROR</h1>
      ) : (
        <>
          <Grid>
            <CardMedia
              component="img"
              height="600"
              image={isPoster(data.poster)}
              alt="Постер"
            />
          </Grid>
          <Grid xs={4}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {data.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Год: {data.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
              <Button
                sx={{ width: "100%", height: 50, mt: 10, alignItems: "center" }}
                onClick={() => navigate(-1)}
                variant="contained"
              >
                Назад
              </Button>
            </CardContent>
          </Grid>
        </>
      )}
    </Grid>
  );
};
