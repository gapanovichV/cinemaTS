import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
	currentPage: number;
	onChangePage: (page: number) => void;
	alsoPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage, alsoPage }) => (
	<ReactPaginate
		className={styles.root}
		breakLabel="..."
		nextLabel=">"
		previousLabel="<"
		onPageChange={(event) => onChangePage(event.selected + 1)}
		pageRangeDisplayed={4}
		pageCount={alsoPage}
		forcePage={currentPage - 1}
	/>
);
