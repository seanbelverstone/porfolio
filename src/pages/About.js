import React from 'react';
import ImageGallery from '../components/ImageGallery';
import { allImages } from '../assets/index';
import './css/About.css';
import ScrollToTop from '../components/ScrollToTop';
import { NavLink } from 'react-router-dom';

const About = () => {

	// slide in divs when they come into view.

	return (
		<div id="aboutPage">
			<div className="parallax">
				<h1 className="aboutTitle glass" id="aboutTitle">About Me</h1>
			</div>
			<div className="leftAligned" id="rowOne">
				<img
					src={allImages.birdBirdCrew}
					id="birdBirdCrew"
					alt="Me with the crew at Bird Bird Biscuit"
					className="mainImages"
				/>
				<p className="aboutText glass">As an English native and having experience that was almost exclusively based in the food and beverage
					industry, moving careers was a big decision, but one that I took to quickly.<br /><br />
					After getting married in 2016, my wife and I moved to Austin in 2018, and I began working at a small biscuit sandwich
					shop called <b>Bird Bird Biscuit</b>. During my time there I recieved a promotion to the role of manager and was lucky
					enough to count myself as one of the chief biscuit makers.</p>
			</div>
			<div className="rightAligned" id="rowTwo">
				<p className="aboutText glass">I then went on to complete a <b>Full Stack Web Development Bootcamp at UT Austin</b>, and graduated
					with flying colors. JavaScript makes sense to me on a logical level, and although I had some challenges along the way
					(looking at you, Redux) I greatly enjoyed learning my first programming language. Since then I've been focusing most of
					my attention on refining my fundamental skills, ironing out any React creases, and working on some interesting projects
					in my spare time. If you're interested in seeing some of them, please head over to the
					<NavLink className="navlinks" id="projectTextLink" to="/projects"> PROJECTS</NavLink> page!</p>
				<img
					src={allImages.meDuckyAndMouse}
					id="meDuckyAndMouse"
					alt="Myself with two prior fosters, Ducky and Mouse"
					className="mainImages"
				/>
			</div>
			<div className="leftAligned" id="rowThree">
				<img
					src={allImages.corvia}
					alt="Corvia Payments logo"
					id="corvia"
					className="mainImages glass"
				/>
				<p className="aboutText glass">After returning to the UT bootcamp as a TA for a semester, I finally managed to land my first
					engineering role at a wonderful finance-tech company called <b>Corvia</b>, previously named F1 Payments. Within this
					role I've been able to further enhance my abilities as a front-end web developer and get accustomed to common industry
					practices, such as utilizing an <b>agile</b> workflow, detailed and constructive pull-request reviews, and creating and
					completing tickets using <b>Jira</b>.
					<br /><br />
					While I'm not working or learning I spend my time bouldering, playing video games, and fostering super old dogs.
				</p>
			</div>
			<div id="collage">
				<ImageGallery />
			</div>
			<ScrollToTop />
		</div>

	)
}

export default About;