import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const ProjectShow = (): JSX.Element => {
	// Grab the url parameters.
	const { id } = useParams<{id: string}>();

	// Gather the projects asyncronously using state, fetch, and effects.
	const [project, setProject] = useState<any>({}); // TODO: Type-ify this
	const fetchProject = async () => {
		try {
			const response = await fetch(`/projects/${id}`, { method: 'GET' });
			const dbProject = await response.json();
			setProject(dbProject);
		}
		catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		fetchProject();
	}, []);

	// Must use history to redirect a button onClick.
	const history = useHistory();

	// Load data on the portfolio item and display it nicely.
	return (
		<>
			<h2>{project.name}</h2>
			<p>{project.description}</p>

			<nav>
				<h2>Page Navigation</h2>
				<ul>
					<li>
						<Link to={`/${id}/edit`}>
							Edit
						</Link>
					</li>

					<li>
						<Link to="/">
							Back
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default ProjectShow;
