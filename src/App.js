import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom';

import RouteLayout from './layouts/RouteLayout';
import HelpLayout from './layouts/HelpLayout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RouteLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<HelpLayout />}>
					<Route path="faq" element={<Faq />} />
					<Route path="contact" element={<Contact />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
