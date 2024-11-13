import { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import AboutSec from './AboutSec';
import PortfolioSec from './PortfolioSec';
import ResumeSec from './ResumeSec';

export default function Main() {
    const [activeButton, setActiveButton] = useState('about');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/khalid-saad-portfolio/') {
            setActiveButton('about');
        } else if (location.pathname === '/khalid-saad-portfolio/PortfolioSec') {
            setActiveButton('portfolio');
        } else if (location.pathname === '/khalid-saad-portfolio/ResumeSec') {
            setActiveButton('resume');
        }
    }, [location.pathname]);

    return (
        <div className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link
                            to="/khalid-saad-portfolio/"
                            className={`navbar-link ${activeButton === 'about' ? 'active' : ''}`}
                            data-nav-link
                        >
                            About
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/khalid-saad-portfolio/ResumeSec"
                            className={`navbar-link ${activeButton === 'resume' ? 'active' : ''}`}
                            data-nav-link
                        >
                            Resume
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/khalid-saad-portfolio/PortfolioSec"
                            className={`navbar-link ${activeButton === 'portfolio' ? 'active' : ''}`}
                            data-nav-link
                        >
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="/khalid-saad-portfolio/"
                    element={<AboutSec classN={activeButton === 'about' ? 'active' : ''} />}
                />
                <Route
                    path="/khalid-saad-portfolio/PortfolioSec"
                    element={<PortfolioSec classN={activeButton === 'portfolio' ? 'active' : ''} />}
                />
                <Route
                    path="/khalid-saad-portfolio/ResumeSec"
                    element={<ResumeSec classN={activeButton === 'resume' ? 'active' : ''} />}
                />
            </Routes>
        </div>
    );
}
