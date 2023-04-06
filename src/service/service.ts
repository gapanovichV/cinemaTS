import { Poster } from './typeService';

export const cleanerDescr = (text: string) => {
	if (text) {
		return text.length > 100 ? text.substr(0, 150) + ' ...' : text;
	} else {
		return '';
	}
};

export const cleanerTitle = (name: string, altName: string) => {
	return name == null ? altName : name;
};

export const isPoster = (poster: Poster) => {
	const notFound = 'https://www.kino-teatr.ru/static/images/no_poster.jpg';
	return poster ? poster.url : notFound;
};
