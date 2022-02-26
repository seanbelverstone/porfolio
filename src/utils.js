export const applyActiveClass = (linkName) => {
	const linkArray = document.getElementsByClassName(linkName);
	Array.from(linkArray).forEach((item) => {
		if (item.pathname === window.location.pathname) item.className = ('navlinks active')
	})
}

export default applyActiveClass;