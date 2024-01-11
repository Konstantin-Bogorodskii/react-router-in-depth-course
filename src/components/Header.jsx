import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/Header.module.css';
import classNames from 'classnames';

const isActiveLink = ({ isActive }) =>
	isActive ? classNames(styles.link, styles.active) : styles.link;
function Header() {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>Jobarouter</h1>
			<nav className={styles.navigation}>
				<NavLink to="/" className={isActiveLink}>
					Home
				</NavLink>
				<NavLink to="/about" className={isActiveLink}>
					About
				</NavLink>
				<NavLink to="/help" className={isActiveLink}>
					Help
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
