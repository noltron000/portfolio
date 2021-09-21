import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import '../src/index.css'

addDecorator((story) => (
	<MemoryRouter initialEntries={['/']}>
		{story()}
	</MemoryRouter>
));

const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export {parameters}
