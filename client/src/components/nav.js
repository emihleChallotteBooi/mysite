import React from 'react';
import { Link } from 'react-router-dom'; 
import './nav.css';


const Nav = ({
  showAbout = true,
  showHome = true,
  showSoftware = true,
  showModelling = true,
}) => {
  return (
    <nav>
      <ul>
        {showAbout && <li><Link to="/">About Me</Link></li>}
        {showHome && <li><Link to="/">Home</Link></li>}
        {showSoftware && <li><Link to="/assets/resume.pdf">Resume</Link></li>}
        {showModelling && <li><Link to="/assets/portfolio.pdf">Portfolio</Link></li>}
      </ul>
    </nav>
  );
};

export default Nav;
