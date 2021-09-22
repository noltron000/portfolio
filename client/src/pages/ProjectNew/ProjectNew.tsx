import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createProject } from '../../functions/server-calls';

const ProjectNew = (): JSX.Element => {
	// Initialize react component state.
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Create New Project</h2>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					createProject({ name, description });
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
