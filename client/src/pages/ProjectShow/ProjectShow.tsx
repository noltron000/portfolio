import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectShow = (): JSX.Element => {
	// Grab the url parameters.
	const { id } = useParams<{id: string}>();

	// Gather the projects asyncronously using state, fetch, and effects.
	const [project, setProject] = useState<any>({});
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

	// Load data on the portfolio item and display it nicely.
	return (
		<>
			<h2>Show Portfolio Item</h2>
			<p>Here&apos;s the chosen item!</p>
			<div>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
			</div>
		</>
	);
};

export default ProjectShow;
