import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';

// https://github.com/AdeleD/react-paginate/
const Pagination = ({ pageCount, currentPage, permalink }) => {
	if (pageCount === 1) {
		return null;
	}

	const pages = Array(pageCount).fill().map((_, i) => {
		const page = i + 1;
		return (
			<Link
				key={i}
				className={classNames({ active: page === currentPage }, 'item')}
				to={`${permalink}?page=${page}`}
			>
				{page}
			</Link>
		);
	});

	return (
		<div className="ui pagination menu">
			{pages}
		</div>
	);
};

Pagination.defaultProps = {
	currentPage: 1,
	permalink: '',
};

Pagination.propTypes = {
	pageCount: PropTypes.number.isRequired,
	currentPage: PropTypes.number,
	permalink: PropTypes.string,
};

export default Pagination;
