
import React from 'react';

const Nav = ({ showAbout = true, showHome = true, showResume = true }) => {
  return (
    <nav>
      <ul>
        {showAbout && <li><a href="/">About me</a></li>}
        {showHome && <li><a href="/about">Home</a></li>}
        {showResume && <li><a href="/contact">Resume</a></li>}
      </ul>
    </nav>
  );
};

export default Nav;
