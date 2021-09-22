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
			<h2>Show Project</h2>
			<p>Here&apos;s the chosen item!</p>
			<div>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
			</div>

			<p>User Links</p>
			<ul>
				<li>
					<Link to="/">Back</Link>
				</li>
				<li>
					<Link to={`/${id}/edit`}>Edit</Link>
				</li>
				<li>
					<button
						type="button"
						onClick={async (event) => {
							event.preventDefault();
							await fetch(`/projects/${id}/delete`, { method: 'POST' });
							history.push('/');
						}}
					>
						Delete
					</button>
				</li>
			</ul>
		</>
	);
};

export default ProjectShow;
