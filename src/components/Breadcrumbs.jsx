import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../styles/Breadcrumbs.module.css';
function Breadcrumbs() {
	const location = useLocation();

	let link = '';
	const crumbs = location.pathname
		.split('/')
		.filter(crumb => crumb !== '')
		.map(crumb => {
			link += `/${crumb}`;

			return (
				<div className={styles.breadcrumb} key={crumb}>
					<Link className={styles.link} to={link}>
						{crumb}
					</Link>
				</div>
			);
		});

	return <div className={styles.container}>{crumbs}</div>;
}

export default Breadcrumbs;
