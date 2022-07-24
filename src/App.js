import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { CircleGradient } from './components/CircleGradient';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { mouseEffect } from './utils';
import './App.css';

const App = () => {
	const location = useLocation();

	useEffect(() => {
		mouseEffect();
	})

	return (
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} classNames="fade" timeout={300}>
				<Routes location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

const Root = () => (
	<>
		<CircleGradient />
		<Suspense fallback={Home}>
			<BrowserRouter>
				<Navbar />
				<App />
			</BrowserRouter>
		</Suspense>
	</>
);

export default Root;
