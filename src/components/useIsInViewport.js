import { useState, useEffect } from "react";

const useIsInViewport = ref => {

	const [isInViewport, setIsInViewport] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { bottom } = ref.current.getBoundingClientRect();
			return setIsInViewport(window.innerHeight - bottom > 20);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [ref, isInViewport])

	return isInViewport;
}

export default useIsInViewport;
