import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { createProject } from '../../functions/server-calls';

const ProjectNew = (): JSX.Element => {
	// Initialize react component state.
	const history = useHistory(); // Used for redirects in buttons.
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Create New Project</h2>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					const response = await createProject({ name, description });
					if (response == null) {
						throw new Error('the server didn\'t create a project!');
					}
					else {
						const project = await response.json();
						const id = project._id;
						history.push(`/${id}`);
					}
				}}
			>
				<label htmlFor="name">
					Name:
					{' '}
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>

				<br />

				<label htmlFor="description">
					Description:
					{' '}
				</label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>

				<br />

				<button type="submit">
					Submit
				</button>

				<nav>
					<h2>Page Navigation</h2>
					<ul>
						<li>
							<Link to="/">
								Back
							</Link>
						</li>
					</ul>
				</nav>
			</form>
		</>
	);
};

export default ProjectNew;
