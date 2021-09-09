import React from 'react';
import { MemoryRouter } from 'react-router';
import { addDecorator } from '@storybook/react';
import './index.css';

addDecorator((story) => (
	<MemoryRouter initialEntries={['/']}>
		{story()}
	</MemoryRouter>
));
