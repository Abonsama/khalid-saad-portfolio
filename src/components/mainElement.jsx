import { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import AboutSec from './AboutSec';
import PortfolioSec from './PortfolioSec';
import ResumeSec from './ResumeSec';

export default function Main() {
    // State to track the active button
    const [activeButton, setActiveButton] = useState('about');

    // Get the current location from react-router
    const location = useLocation();

    useEffect(() => {
        // Update the active button based on the current route
        if (location.pathname === '/') {
            setActiveButton('about');
        } else if (location.pathname === '/PortfolioSec') {
            setActiveButton('portfolio');
        } else if (location.pathname === '/ResumeSec') {
            setActiveButton('resume');
        }
    }, [location.pathname]); // Re-run when pathname changes

    return (
        <div className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button
                            onClick={() => setActiveButton('about')}
                            className={`navbar-link ${activeButton === 'about' ? 'active' : ''}`}
                            data-nav-link
                        >
                            <Link to="/">About</Link>
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            onClick={() => setActiveButton('resume')}
                            className={`navbar-link ${activeButton === 'resume' ? 'active' : ''}`}
                            data-nav-link
                        >
                            <Link to="/ResumeSec">Resume</Link>
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            onClick={() => setActiveButton('portfolio')}
                            className={`navbar-link ${activeButton === 'portfolio' ? 'active' : ''}`}
                            data-nav-link
                        >
                            <Link to="/PortfolioSec">Portfolio</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<AboutSec classN={activeButton === 'about' ? 'active' : ''} />}
                />
                <Route
                    path="/PortfolioSec"
                    element={<PortfolioSec classN={activeButton === 'portfolio' ? 'active' : ''} />}
                />
                <Route
                    path="/ResumeSec"
                    element={<ResumeSec classN={activeButton === 'resume' ? 'active' : ''} />}
                />
            </Routes>
        </div>
    );
}
