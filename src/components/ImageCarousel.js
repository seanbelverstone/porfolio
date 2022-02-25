import { Carousel } from "react-responsive-carousel";
import images from '../assets/index';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/ImageCarousel.css';

const ImageCarousel = () => {
	return (
		<div id="carouselWrapper">
			<Carousel
				infiniteLoop
				autoPlay
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
			>
				<div>
					<img src={images.austin} alt="Austin, TX" />
				</div>
				<div>
					<img src={images.bristol} alt="Bristol, UK" />
				</div>
				<div>
					<img src={images.bude} alt="Bude, UK" />
				</div>
				<div>
					<img src={images.lleida} alt="Lleida, ES" />
				</div>
			</Carousel>
		</div>
	)

}

export default ImageCarousel;