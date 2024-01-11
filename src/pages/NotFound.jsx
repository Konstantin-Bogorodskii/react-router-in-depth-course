import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, facere quo! Dolore
				sed ullam laborum vitae provident nisi sunt voluptate consequuntur vel, ad a esse
				minus itaque, consequatur recusandae optio.
			</p>

			<div>
				Go to the <Link to="/">Home Page</Link>
			</div>
		</div>
	);
}

export default NotFound;
