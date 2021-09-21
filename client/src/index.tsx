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

				<Route
					path="/new"
					component={ProjectNew}
				/>

				<Redirect
					from="/index"
					to="/"
				/>

				<Redirect
					from="/:id/show"
					to="/:id"
				/>

				<Route
					path="/:id/edit"
					component={ProjectEdit}
				/>

				<Route
					path="/:id"
					component={ProjectShow}
				/>

				<Route
					path="/"
					component={ProjectsIndex}
				/>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
