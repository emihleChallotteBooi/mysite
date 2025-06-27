import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <section className="footer-section">
          <h4>Contact Details:</h4>
          <ul>
            <li>Cell number: 065 693 1087</li>
            <li>Email: bemihle9@gmail.com</li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Connect with me:</h4>
          <ul className="social-icons">
            <li>
              <a href="https://github.com/emihleChallotteBooi" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"

                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/queenchallotte/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/q_challotte?igsh=MW5uY2I2YWdwdmp4cg%3D%3D&utm_source=qr"
                 target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-section bug-report">
          <h3>Spot a bug?</h3>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
