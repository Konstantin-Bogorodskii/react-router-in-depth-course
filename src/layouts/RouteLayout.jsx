import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function RouteLayout() {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RouteLayout;
