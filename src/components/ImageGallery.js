import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Backdrop from '@mui/material/Backdrop';
import { aboutPictures } from '../assets';

function srcset(image, width, height, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${width * cols}&h=${height * rows
			}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function CustomImageList() {
	const [open, setOpen] = useState(false);
	const [imgSrc, setImgSrc] = useState('')

	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	const largeImage = (event) => {
		// store the data-src attribute in currentImage
		let currentImage = event.currentTarget.getAttribute('data-index')

		// set the state of imgSrc to equal currentImage - i do this last to ensure there aren't
		// any errors with asynchronous code running
		setImgSrc(aboutPictures[currentImage].img);

		// toggle the backdrop
		handleToggle();
	}
	return (
		<>
			<ImageList
				sx={{
					width: '45vw',
					height: 650,
					// Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
					transform: 'translateZ(0)'
				}}
				rowHeight={200}
				gap={1}
			>
				{aboutPictures.map((item, index) => {
					const cols = item.featured ? 2 : 1;
					const rows = item.featured ? 2 : 1;

					return (
						<ImageListItem key={item.img} cols={cols} rows={rows}>
							<img
								{...srcset(item.img, 250, 200, rows, cols)}
								alt={item.title}
								loading='lazy'
							/>
							<ImageListItemBar
								sx={{
									background:
										'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
										'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
								}}
								title={item.title}
								position='top'
								actionIcon={
									<IconButton
										sx={{ color: 'white' }}
										aria-label={`star ${item.title}`}
										onClick={largeImage}
										data-index={index}
									>
										<VisibilityIcon data-index={index}/>
									</IconButton>
								}
								actionPosition='left'
							/>
						</ImageListItem>
					);
				})}
			</ImageList>
			{/* this backdrop shows when the eye is clicked */}
			<Backdrop open={open} onClick={handleClose} id='backdrop' style={{ zIndex: 100, color: 'var(--backgroundFaded)' }}>
				<img src={imgSrc} alt='the same as before, just focused' style={{ width: 'auto', maxHeight: '75vh' }} className='images' />
			</Backdrop>
		</>
	);
}
