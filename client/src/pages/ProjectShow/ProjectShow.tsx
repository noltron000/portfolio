import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchProject } from '../../functions/server-calls';

// Assumes the project is done downloading.
const ProjectShowSuccess = ({ project }: {
	project: any, // TODO: Type-ify this
}): JSX.Element => {
	const id = project._id;
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

// Load data on the portfolio item and display it nicely.
const ProjectShow = (): JSX.Element => {
	// Grab the url parameters.
	const { id } = useParams<{id: string}>();

	// Gather the projects asyncronously using state, fetch, and effects.
	const [project, setProject] = useState<any>(null); // TODO: Type-ify this
	useEffect(() => {
		(async () => {
			const response = await fetchProject({ id });
			if (response == null) {
				setProject(null);
			}
			else {
				const data = await response.json();
				setProject(data);
			}
		})();
	}, []);

	return (
		<>
			{project && <ProjectShowSuccess project={project} />}
		</>
	);
};

export default ProjectShow;
