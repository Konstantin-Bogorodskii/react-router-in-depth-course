import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

import styles from '../../styles/CareerDetails.module.css';
function CareerDetails() {
	const { id } = useParams();
	const career = useLoaderData();

	return (
		<div className={styles.container}>
			<h2>Career Details for {career.title}</h2>
			<p>Starting salary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati dolorum
				similique pariatur accusamus facere, delectus placeat fugiat quas suscipit dicta
				cumque, voluptatum consequatur? Porro et id quasi consequuntur magni?
			</div>
		</div>
	);
}

export default CareerDetails;

export const careerDetailsLoader = ({ params }) => {
	const { id } = params;
	return axios
		.get('db.json')
		.then(response => {
			const career = response.data.careers[id - 1];
			return career;
		})
		.catch(() => {
			throw new Error('Could not find this career');
		});
};
