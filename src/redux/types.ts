import { Movie } from './allMovie/typeMovie';

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'completed',
	ERROR = 'error',
}

export interface movieSliceState {
	items: Movie;
	status: Status;
}
