import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from '../styles/Header.module.css';
import classNames from 'classnames';

const isActiveLink = ({ isActive }) =>
	isActive ? classNames(styles.link, styles.active) : styles.link;
function Header() {
	return (
		<header className={styles.container}>
			<Link to="/" className={styles.title}>
				Jobarouter
			</Link>

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
				<NavLink to="/careers" className={isActiveLink}>
					Careers
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
