import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

const ProjectsIndex = (): JSX.Element => {
	// Gather the projects asyncronously using state, fetch, and effects.
	const [projects, setProjects] = useState<Array<any>>([]); // TODO: Type-ify this
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

	// Load pre-paginated amount of projects.
	// Return a list of each project, linking to each.
	return (
		<>
			<h2>Projects Index</h2>
			<p>Here&apos;s a list of items.</p>

			<ul>
				{projects.map((project) => (
					<li key={project._id}>
						<ProjectCard project={project} />
					</li>
				))}
			</ul>

			<nav>
				<h2>Page Navigation</h2>
				<ul>
					<li>
						<Link to="/new">
							Add a Project
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default ProjectsIndex;
