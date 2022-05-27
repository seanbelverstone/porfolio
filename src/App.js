import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CircleGradient } from './components/CircleGradient';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { mouseEffect } from './utils';

const App = () => {
		
	useEffect(() => {
		mouseEffect();
	})

	return (
		<>
		<CircleGradient />
		<Navbar />
		<Suspense fallback={Home}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
		</>
	);
};

export default App;
