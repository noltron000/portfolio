import React, { useState } from 'react';

interface Props {
	type: 'new' | 'edit';
	initialName?: string;
	initialDescription?: string;
}

const PortfolioItemForm = ({
	type,
	initialName,
	initialDescription,
}: Props): JSX.Element => {
	// Initialize react component state.
	const [name, setName] = useState(initialName ?? '');
	const [description, setDescription] = useState(initialDescription ?? '');

	// Determine form action and method.
	let action: 'create' | 'update';
	let method: 'POST' | 'PUT';
	if (type === 'new') {
		action = 'create';
		method = 'POST';
	} else if (type === 'edit') {
		action = 'update';
		method = 'PUT';
	} else {
		throw new TypeError('Unexpected component type!');
	}

	// Show the form to submit a new item, and create it on submit.
	return (
		<>
			<h2>Add Portfolio Item</h2>
			<form
				method={method}
				action={`/portfolio-item/${action}`}
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

export default PortfolioItemForm;
