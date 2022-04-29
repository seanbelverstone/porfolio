import { allImages } from './assets/index';

export const applyActiveClass = (linkName) => {
	const linkArray = document.getElementsByClassName(linkName);
	Array.from(linkArray).forEach((item) => {
		if (item.pathname === window.location.pathname) item.className = ('navlinks active')
	})
}

export const isEmpty = item => item.length < 1;

export const projectList = {
	antre: {
		src: allImages.antre,
		srcTwo: allImages.antreTwo,
		title: 'Antre',
		description: `This creation has already been a year or so in production and is still a work in progress. It began with my realization that there aren't that many good 'choose-your-own-adventure' type games for mobile devices anymore, so I decided to take matters into my own hands.\nAs my proficiency is in web development I worked on this project as a browser based experience first, ensuring that I keep the front and backend separate for easier conversion to a mobile format in the future. It follows the same technologies that I've become accustomed to - MySQL, Express, React & Node - but also features a state machine, a type of programming that I was completely new to!\nFun fact - the logo is created from the different paths that you can take throughout the game\nIt's live right now, go and give it a try!`,
		liveLink: 'https://www.antregame.com',
		githubLink: 'https://github.com/seanbelverstone/antreGame'
	},
	biscuits: {
		src: allImages.biscuits,
		srcTwo: allImages.biscuitsTwo,
		title: 'Thanksgiving Biscuits',
		description: 'My first professional commissioned website.\nRequested by my former employer at Bird Bird Biscuit, we used this ordering system during Thanksgiving for guests to order multiple biscuits at a time.\nUsing React combined with Node, Express, and Google Firebase, I followed design queues from their original website to keep within theme. As requested in the initial designs, I ensured that there was a separate customer and employee view - the customers had a form to fill out and employees had a hidden button behind the logo where they could view all orders on a neat calendar. This calendar enabled the employees an easy way to view and complete orders. This project also used Stripe.js for a secure, worry-free checkout experience.',
		liveLink: 'https://birdbirdbiscuit.herokuapp.com/',
		githubLink: 'https://github.com/seanbelverstone/Bird-Bird-Ordering'
	},
	reelTime: {
		src: allImages.reelTime,
		srcTwo: allImages.reelTimeTwo,
		title: 'Reel Time',
		description: 'Reel Time was my graduation project. Utilizing a combination of React, Sequelize and Express, and built in a group of 4, this project is a culmination of everything we had learnt over the prior 6 months. My role in the group was to focus on the back-end, including routing, server setup and database management.\nAs far as a final graduation project goes, I was quite happy with how this turned out. It was built in just two weeks and it definitely had some eye-catching visuals, from the fullscreen video background to the snappy logo.',
		liveLink: 'https://reel-time-app.herokuapp.com/',
		githubLink: 'https://github.com/seanbelverstone/Reel-Time'
	},
	lotr: {
		src: allImages.lotr,
		srcTwo: allImages.lotrTwo,
		title: 'Trivia - Lord of the Rings Edition',
		description: 'A Lord of the Rings trivia quiz. With dynamically appending questions using jQuery, countdown timers and a rating screen at the end, this was one of my favorite projects to work on during my time at the bootcamp. Not just because of the theme used, but also because it was one of my first solo projects.\nFor one of my first unguided projects, I am really proud of how well this turned out. Sure, there are a few things that I would change now (especially fixing some of the Giphy pictures that have since been removed from their API), but I am really happy with the design choices and consistent themes throughout.\nIt was my highest graded individual project during my 6 months at the bootcamp.',
		liveLink: 'https://seanbelverstone.github.io/TriviaGame/',
		githubLink: 'https://github.com/seanbelverstone/TriviaGame'
	}
};

export default applyActiveClass;