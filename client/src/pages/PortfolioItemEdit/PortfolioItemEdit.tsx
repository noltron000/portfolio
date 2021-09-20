import React from 'react';
import PortfolioItemForm from '../../components/PortfolioItemForm/PortfolioItemForm';

// Mock data
const data = {
	name: 'AsyncRacing',
	description: 'Track your race records with your friends!',
};

// Show the form to create and submit a new item.
const PortfolioItemEdit = (): JSX.Element => {
	const { name, description } = data;
	return (
		<PortfolioItemForm
			type="edit"
			initialName={name}
			initialDescription={description}
		/>
	);
};

export default PortfolioItemEdit;
