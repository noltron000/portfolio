import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }: {project: any}): JSX.Element => (
	<article>
		<h3>{project.name}</h3>
		<p>{project.description}</p>
		<nav>
			<ul>
				<li>
					<Link to={`/${project._id}`}>
						View Project
					</Link>
				</li>
				<li>
					<Link to={`/${project._id}/edit`}>
						Edit Project
					</Link>
				</li>
			</ul>
		</nav>
	</article>
);

export default ProjectCard;
