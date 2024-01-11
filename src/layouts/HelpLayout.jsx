import { NavLink, Outlet } from 'react-router-dom';

import styles from '../styles/HelpLayout.module.css';
import classNames from 'classnames';

const isActiveLink = ({ isActive }) =>
	isActive ? classNames(styles.link, styles.active) : styles.link;
function HelpLayout() {
	return (
		<div>
			<h2>Website Help!</h2>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut.</p>

			<nav className={styles.navigation}>
				<NavLink to="faq" className={isActiveLink}>
					View the F.A.Q
				</NavLink>
				<NavLink to="contact" className={isActiveLink}>
					Contact Us
				</NavLink>
			</nav>

			<Outlet />
		</div>
	);
}

export default HelpLayout;
