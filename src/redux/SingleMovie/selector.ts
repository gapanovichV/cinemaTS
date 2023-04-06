import { RootState } from '../store';

export const selectMovieData = (state: RootState) => state.singleMovie;
