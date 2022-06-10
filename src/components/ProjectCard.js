import { useState } from 'react';
import './css/ProjectCard.css';

const ProjectCard = (props) => {
	const {
		title,
		src,
		altImage,
		text,
		live,
		git
	} = props;
	const [clicked, setClicked] = useState(false);
	const [currentImage, setCurrentImage] = useState(src);

	const handleClick = (clicked) => {
		setCurrentImage(clicked ? src : altImage);
		setClicked(!clicked);
	}

	const renderText = () => {
		return text.split('\n').map(item => (
			<p key={item}>{item}</p>
		))
	}

	return (
		<div className="projectCardWrapper" key={title}>
			<h1 className='pageTitle'>{title}</h1>
			<img className="projectImage" src={currentImage} alt={title} onClick={() => handleClick(clicked)} />
			<i style={{ marginTop: '0.5em' }}>Click on the image for an alternate view</i>
			<div className="projectText glass">
				{renderText()}
				<div className="projectLinks">
					<a href={live} target="_blank" rel="noreferrer">Live Demo</a>
					<a href={git} target="_blank" rel="noreferrer">GitHub Repo</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard;