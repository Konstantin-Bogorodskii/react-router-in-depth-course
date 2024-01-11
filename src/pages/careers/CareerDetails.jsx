import { useLoaderData, useNavigate } from 'react-router-dom';

import styles from '../../styles/CareerDetails.module.css';
function CareerDetails() {
	const career = useLoaderData();

	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate(-1);
	};

	return (
		<div className={styles.container}>
			<h2>Career Details for {career.title}</h2>
			<p>Starting salary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati dolorum
				similique pariatur accusamus facere, delectus placeat fugiat quas suscipit dicta
				cumque, voluptatum consequatur? Porro et id quasi consequuntur magni?
			</p>

			<button onClick={handleButtonClick}>Back to Careers Page</button>
		</div>
	);
}

export default CareerDetails;

export const careerDetailsLoader = ({ params }) => {
	const { id } = params;

	return import('../../data/db.json')
		.then(data => {
			return data.careers[id - 1];
		})
		.catch(() => {
			throw new Error('Could not find this career');
		});
};
