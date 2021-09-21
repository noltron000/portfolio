import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../../components/ProjectForm/ProjectForm';

// Show the form to create and submit a new item.
const ProjectEdit = (): JSX.Element => {
	// Grab the url parameters.
	const { id } = useParams<{id: string}>();

	// Gather the projects asyncronously using state, fetch, and effects.
	const [project, setProject] = useState<any>(null); // TODO: Type-ify this
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

	return (
		<>
			{project && (
				<ProjectForm
					type="edit"
					initialName={project.name}
					initialDescription={project.description}
				/>
			)}
		</>
	);
};

export default ProjectEdit;
