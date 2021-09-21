import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
	type: 'new' | 'edit';
	initialName?: string;
	initialDescription?: string;
}

const ProjectForm = ({
	type,
	initialName,
	initialDescription,
}: Props): JSX.Element => {
	// Grab the url parameters.
	const { id } = useParams<{id: string}>();

	// Initialize react component state.
	const [name, setName] = useState(initialName ?? '');
	const [description, setDescription] = useState(initialDescription ?? '');

	// Determine form action and method.
	let action: string;
	let method: 'POST' | 'PUT';
	if (type === 'new') {
		action = '/projects/create';
		method = 'POST';
	}
	else if (type === 'edit') {
		action = `/projects/${id}/update`;
		method = 'POST';
	}
	else {
		throw new TypeError('Unexpected component type!');
	}

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Add Portfolio Item</h2>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					try {
						await fetch(action, {
							method,
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								name,
								description,
							}),
						});
					}
					catch (err) {
						console.error(err);
					}
				}}
			>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>

				<br />

				<label htmlFor="description">Description</label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>

				<br />

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default ProjectForm;
