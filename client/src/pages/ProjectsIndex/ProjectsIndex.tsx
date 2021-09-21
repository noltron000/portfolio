import React, { useEffect, useState } from 'react';

const ProjectsIndex = () => {
	const [projects, setProjects] = useState<null | Record<string, unknown>>(null);

	const fetchProjects = async () => {
		try {
			const response = await fetch('/projects', {
				method: 'GET',
			});
			const dbProjects = await response.json();
			setProjects(dbProjects);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	// Load pre-paginated amount of portfolio items.
	// Return a list of each portfolio item, linking to each.
	return (
		<>
			<h2>Portfolio Index</h2>
			<p>Here&apos;s a list of items.</p>
			<pre><code>{JSON.stringify(projects, undefined, '\t')}</code></pre>
		</>
	);
};

export default ProjectsIndex;
