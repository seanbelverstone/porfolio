import React  from 'react';
import ImageGallery from '../components/ImageGallery';
import { allImages } from '../assets/index';
import './css/About.css';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {

	return (
		<div id="aboutPage">
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
				   my attention on refining my fundamental skills, ironing out any React creases, and building as many things as I
				    possibly can in my free time.</p>
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
				 practices, such as utilizing an <i>agile</i> workflow, 



					<br/><br/>
				If you're interested in seeing what I've been up to, make sure to check out the Projects page.
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