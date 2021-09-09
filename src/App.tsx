import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit
					{' '}
					<code>src/App.tsx</code>
					{' '}
					and save to reload.

					<br />

					Navigate to
					{' '}
					<Link
						className="App-link"
						to="/"
					>
						Home
					</Link>
					{' '}
					to test another page.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
