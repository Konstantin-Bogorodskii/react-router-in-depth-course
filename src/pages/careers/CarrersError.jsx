import { Link, useRouteError } from 'react-router-dom';

function CarrersError() {
	const error = useRouteError();
	console.log('error ==>', error);

	return (
		<div>
			<h2>Error</h2>
			<p>{error.message}</p>
			<Link to="/">Back to the Home Page</Link>
		</div>
	);
}

export default CarrersError;
