import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const fetchProject = async (
	{ id }: Record<string, string>,
): Promise<Response | null> => {
	try {
		return fetch(`/projects/${id}`, { method: 'GET' });
	}
	catch (err) {
		console.error(err);
		return null;
	}
};

const updateProject = async (
	{ id, name, description }: Record<string, string>,
): Promise<void> => {
	try {
		await fetch(`/projects/${id}/update`, {
			method: 'POST',
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
};

const deleteProject = async (
	{ id }: {id: string},
): Promise<void> => {
	try {
		await fetch(`/projects/${id}/delete`, { method: 'POST' });
	}
	catch (err) {
		console.error(err);
	}
};

// Assumes the project is done downloading.
const ProjectEditSuccess = ({ project }: {
	project: any, // TODO: Type-ify this
}): JSX.Element => {
	const id = project._id;

	// Initialize react component state.
	const [name, setName] = useState<string>(project.name);
	const [description, setDescription] = useState<string>(project.description);

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Update Project</h2>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					updateProject({ id, name, description });
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
					Update
				</button>

				<button
					type="button"
					onClick={() => deleteProject({ id })}
				>
					Delete
				</button>

				<nav>
					<h2>Page Navigation</h2>
					<ul>
						<li>
							<Link to={`/${id}`}>
								Back
							</Link>
						</li>
					</ul>
				</nav>
			</form>
		</>
	);
};

// Show the form to create and submit a new item.
const ProjectEdit = (): JSX.Element => {
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
			{project && (
				<ProjectEditSuccess project={project} />
			)}
		</>
	);
};

export default ProjectEdit;
