import { allImages } from './assets/index';

export const applyActiveClass = (linkName) => {
	const linkArray = document.getElementsByClassName(linkName);
	Array.from(linkArray).forEach((item) => {
		if (item.pathname === window.location.pathname) item.className = ('navlinks active')
	})
}

export const projectList = {
	antre: {
		src: allImages.antre,
		title: 'Antre',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet risus quis libero maximus gravida. In laoreet, metus sit amet finibus feugiat, libero urna malesuada nibh, non luctus orci diam sit amet nulla. Quisque et porttitor diam. Pellentesque non libero orci. Nunc vulputate venenatis dolor, non dignissim dolor efficitur ac. Aliquam ut nibh at metus auctor scelerisque at ac nunc. Quisque congue urna vel nisl facilisis dignissim. Donec faucibus vehicula nisl. Sed leo massa, facilisis ut tincidunt sed, tincidunt et quam. Etiam lobortis dolor vel enim volutpat, et maximus lacus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla leo lobortis, suscipit elit at, convallis quam. Phasellus commodo tellus at leo tempor, a pharetra mauris tristique. Ut tincidunt ornare sollicitudin. Nunc tempor erat suscipit dignissim ultrices. Suspendisse porta dictum enim commodo commodo.',
		liveLink: 'https://www.antregame.com',
		githubLink: 'https://github.com/seanbelverstone/antreGame'
	},
	biscuits: {
		src: allImages.biscuits,
		title: 'Thanksgiving Biscuits',
		description: 'My first professional website. Created with MySQL, Express, React, and Node.js, this application boasts separate pages for customer and employee and is live just in time for Thanksgiving.',
		liveLink: 'https://birdbirdbiscuit.herokuapp.com/',
		githubLink: 'https://github.com/seanbelverstone/Bird-Bird-Ordering'
	},
	reelTime: {
		src: allImages.reelTime,
		title: 'Reel Time',
		description: 'Reel Time was my graduation project. Utilizing a combination of React, Sequelize and Express, and built in a group of 4, this project is a culmination of everything we had learnt on over the prior 6 months. My role in the group was to focus on the back-end, including routing, server setup and database management.',
		liveLink: 'https://reel-time-app.herokuapp.com/',
		githubLink: 'https://github.com/seanbelverstone/Reel-Time'
	},
	lotr: {
		src: allImages.lotr,
		title: 'Trivia - Lord of the Rings Edition',
		description: 'A Lord of the Rings trivia quiz. With dynamically appending questions using jQuery, countdown timers and a rating screen at the end, this was one of my favorite projects to work on. Not just because of the theme used, but also because it was one of my first solo projects.',
		liveLink: 'https://seanbelverstone.github.io/TriviaGame/',
		githubLink: 'https://github.com/seanbelverstone/TriviaGame'
	}
};

export default applyActiveClass;