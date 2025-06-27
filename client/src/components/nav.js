import React from 'react';
import { Link } from 'react-router-dom'; 

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
        {showSoftware && <li><Link to="/software">Software</Link></li>}
        {showModelling && <li><Link to="/modelling">Modelling</Link></li>}
      </ul>
    </nav>
  );
};

export default Nav;
