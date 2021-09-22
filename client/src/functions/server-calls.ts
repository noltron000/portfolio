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

const createProject = async ({
	name,
	description,
}: Record<string, string>): Promise<void> => {
	try {
		await fetch('/projects/create', {
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

export {
	fetchProject,
	createProject,
	updateProject,
	deleteProject,
};
