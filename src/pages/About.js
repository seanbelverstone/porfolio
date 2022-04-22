import ImageGallery from '../components/ImageGallery';
import { allImages } from '../assets/index';
import './css/About.css';

const About = () => {
	return (
		<div id="aboutPage">
			<div id="firstRow">
				<img src={allImages.meDuckyAndMouse} id="meDuckyAndMouse" alt="Myself with two prior fosters, Ducky and Mouse" className="mainImages"/>
				<p id="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lorem diam. Pellentesque ipsum justo, tristique id erat pulvinar, ultrices bibendum ligula. Quisque dapibus lobortis ipsum, ut pharetra odio placerat ut. Mauris sit amet sollicitudin nulla. Donec laoreet, nulla elementum posuere auctor, erat magna tincidunt orci, sollicitudin tempor ligula ligula consequat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dignissim odio orci, sit amet hendrerit orci ullamcorper sit amet. Proin laoreet, lorem eu placerat rutrum, odio metus cursus tortor, ac tempus ipsum dolor vel mauris. Sed volutpat finibus libero a posuere. Nulla ac sodales enim, a condimentum justo. Aenean volutpat metus vulputate lacus varius, nec maximus leo mattis. Vivamus purus enim, molestie id nisi ut, porttitor semper mi. Nulla nec laoreet tellus. Integer vel diam mattis, rutrum felis ut, semper velit. Aenean vel sapien vitae tellus placerat sodales vitae sed elit. Nunc vel tempor elit, nec elementum mi. Nunc tincidunt ante elit, nec viverra lectus varius ut. Aliquam vel fermentum augue. Nunc nunc mauris, dignissim id libero sit amet, faucibus euismod eros.</p>
			</div>
			<div id="secondRow">
				<p id="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lorem diam. Pellentesque ipsum justo, tristique id erat pulvinar, ultrices bibendum ligula. Quisque dapibus lobortis ipsum, ut pharetra odio placerat ut. Mauris sit amet sollicitudin nulla. Donec laoreet, nulla elementum posuere auctor, erat magna tincidunt orci, sollicitudin tempor ligula ligula consequat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dignissim odio orci, sit amet hendrerit orci ullamcorper sit amet. Proin laoreet, lorem eu placerat rutrum, odio metus cursus tortor, ac tempus ipsum dolor vel mauris. Sed volutpat finibus libero a posuere. Nulla ac sodales enim, a condimentum justo. Aenean volutpat metus vulputate lacus varius, nec maximus leo mattis. Vivamus purus enim, molestie id nisi ut, porttitor semper mi. Nulla nec laoreet tellus. Integer vel diam mattis, rutrum felis ut, semper velit. Aenean vel sapien vitae tellus placerat sodales vitae sed elit. Nunc vel tempor elit, nec elementum mi. Nunc tincidunt ante elit, nec viverra lectus varius ut. Aliquam vel fermentum augue. Nunc nunc mauris, dignissim id libero sit amet, faucibus euismod eros.</p>
				<img src={allImages.birdBirdCrew} id="birdBirdCrew" alt="Myself with two prior fosters, Ducky and Mouse" className="mainImages"/>
			</div>
			<div id="collage">
				<ImageGallery />
			</div>
		</div>

	)
}

export default About;