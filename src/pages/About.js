import ImageGallery from '../components/ImageGallery';
import { allImages } from '../assets/index';
import './css/About.css';

const About = () => {
	return (
		<div id="aboutPage">
			<div id="firstRow">
				<img src={allImages.birdBirdCrew} id="birdBirdCrew" alt="Myself with two prior fosters, Ducky and Mouse" className="mainImages" />
				<p id="aboutText">As an English native and having experience that was almost exclusively based in the food and beverage industry, moving careers was a big decision, but one that I took to quickly.<br /><br />
					After getting married in 2016, my wife and I moved to Austin in 2018, and I began working at a small biscuit sandwich shop called Bird Bird Biscuit. During my time there I recieved a promotion to the role of manager and was lucky enough to count myself as one of the chief biscuit makers.</p>
			</div>
			<div id="imgContainer">
				<img src={allImages.linebreak} alt="a linebreak" id="linebreak" />
			</div>
			<div id="secondRow">
				<p id="aboutText">I then went on to complete a Full Stack Web Development Bootcamp at UT Austin, and graduated with flying colors. JavaScript makes sense to me on a logical level, and although I had some challenges along the way (looking at you, Redux) I greatly enjoyed learning my first programming language. Since then I've been focusing most of my attention on refining my fundamental skills, ironing out any React creases, and building as many things as I possibly can in my free time.<br /><br />
				If you're interested in seeing what I've been up to, make sure to check out the Projects page.</p>
				<img src={allImages.meDuckyAndMouse} id="meDuckyAndMouse" alt="Myself with two prior fosters, Ducky and Mouse" className="mainImages" />
			</div>

			<div id="collage">
				<ImageGallery />
			</div>
		</div>

	)
}

export default About;