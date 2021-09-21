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
import ProjectsIndex from './pages/ProjectsIndex/ProjectsIndex';
import ProjectNew from './pages/ProjectNew/ProjectNew';
import ProjectShow from './pages/ProjectShow/ProjectShow';
import ProjectEdit from './pages/ProjectEdit/ProjectEdit';

import reportWebVitals from './reportWebVitals';

/* React Renderer */
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>

				<Route path="/new">
					<ProjectNew />
				</Route>

				<Redirect from="/index" to="/" />

				<Route path="/:id/edit">
					<ProjectEdit />
				</Route>

				<Redirect from="/:id/show" to="/:id" />

				<Route path="/:id">
					<ProjectShow />
				</Route>

				<Route path="/">
					<ProjectsIndex />
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
