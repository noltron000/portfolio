import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsIndex = () => {
	// Gather the projects asyncronously using state, fetch, and effects.
	const [projects, setProjects] = useState<Array<any>>([]);
	const fetchProjects = async () => {
		try {
			const response = await fetch('/projects', { method: 'GET' });
			const dbProjects = await response.json();
			setProjects(dbProjects);
		}
		catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		fetchProjects();
	}, []);

	// Load pre-paginated amount of portfolio items.
	// Return a list of each portfolio item, linking to each.
	return (
		<>
			<h2>Portfolio Index</h2>
			<p>Here&apos;s a list of items.</p>
			<ul>
				{projects.map((project) => (

					<li key={project._id}>
						<Link to={`/${project._id}`}>
							<h3>{project.name}</h3>
						</Link>
						{project.description}
					</li>

				))}
			</ul>
		</>
	);
};

export default ProjectsIndex;
