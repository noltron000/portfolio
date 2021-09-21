import React from 'react';
import ProjectForm from '../../components/ProjectForm/ProjectForm';

// Mock data
const data = {
	name: 'AsyncRacing',
	description: 'Track your race records with your friends!',
};

// Show the form to create and submit a new item.
const ProjectEdit = (): JSX.Element => {
	const { name, description } = data;
	return (
		<ProjectForm
			type="edit"
			initialName={name}
			initialDescription={description}
		/>
	);
};

export default ProjectEdit;
