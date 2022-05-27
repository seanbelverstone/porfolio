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

export const internationalPhoneValidation = (phone) => {
	const reg = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;
	return reg.test(phone)
}

export const mouseEffect = () => {
	document.addEventListener('mousemove', (e) => {
		document.getElementById('circleGradient').style.transform = 'translateY('+(e.clientY-60)+'px)';
		document.getElementById('circleGradient').style.transform += 'translateX('+(e.clientX-60)+'px)';
	})
}

export default applyActiveClass;