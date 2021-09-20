/* Library Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Redirect,
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

/* Local Imports */
import './index.css';
import PortfolioIndex from './pages/PortfolioIndex/PortfolioIndex';
import PortfolioItemNew from './pages/PortfolioItemNew/PortfolioItemNew';
import PortfolioItemShow from './pages/PortfolioItemShow/PortfolioItemShow';
import PortfolioItemEdit from './pages/PortfolioItemEdit/PortfolioItemEdit';

import reportWebVitals from './reportWebVitals';

/* React Renderer */
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>

				<Route path="/new">
					<PortfolioItemNew />
				</Route>

				<Redirect from="/index" to="/" />

				<Route path="/:id/edit">
					<PortfolioItemEdit />
				</Route>

				<Redirect from="/:id/show" to="/:id" />

				<Route path="/:id">
					<PortfolioItemShow />
				</Route>

				<Route path="/">
					<PortfolioIndex />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
