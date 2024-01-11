import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import { Outlet } from 'react-router-dom';

function RouteLayout() {
	return (
		<>
			<Header />
			<Breadcrumbs />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RouteLayout;
