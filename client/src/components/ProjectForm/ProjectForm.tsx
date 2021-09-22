import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

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
	const history = useHistory();

	// Determine form action and method.
	let action: string;
	let backUrl: string;
	let method: 'POST' | 'PUT';
	if (type === 'new') {
		backUrl = '/';
		action = '/projects/create';
		method = 'POST';
	}
	else if (type === 'edit') {
		backUrl = `/${id}`;
		action = `/projects/${id}/update`;
		method = 'POST';
	}
	else {
		throw new TypeError('Unexpected component type!');
	}

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Create/Update Project</h2>
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

				<button type="submit">
					Create/Update
				</button>
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

				<nav>
					<h2>Page Navigation</h2>
					<ul>
						<li>
							<Link to={backUrl}>
								Back
							</Link>
						</li>
					</ul>
				</nav>
			</form>
		</>
	);
};

export default ProjectForm;
