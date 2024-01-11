import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

import styles from '../../styles/Careers.module.css';
function Careers() {
	const careers = useLoaderData();

	return (
		<>
			{careers.map(career => {
				return (
					<Link to={`${career.id}`} className={styles.link} key={career.id}>
						<h3 className={styles.title}>{career.title}</h3>
						<p className={styles.location}>Based in {career.location}</p>
					</Link>
				);
			})}
		</>
	);
}

export default Careers;

export const careersLoader = async () => {
	return axios
		.get('db.json')
		.then(response => {
			const career = response.data.careers;
			return career;
		})
		.catch(() => {
			throw new Error('Could not fetch the careers');
		});
};
