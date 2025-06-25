import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="Contacts">
        <h4>Contact Details:</h4>
        <ul>
          <li>Cell number: 065 693 1087</li>
          <li>Email: bemihle9@gmail.com</li>
        </ul>
      </section>

      <section id="Socials">
        <ul>
          <li>
            <a href="https://github.com/emihleChallotteBooi" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/github_icon.png"
                alt="GitHub"
                width="50"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/queenchallotte/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/linkedin_icon.png"
                alt="LinkedIn"
                width="50"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/q_challotte?igsh=MW5uY2I2YWdwdmp4cg%3D%3D&utm_source=qr"
               target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                width="50"
              />
            </a>
          </li>
        </ul>
      </section>

      <h3>Spot a bug?</h3>
    </footer>
  );
};

export default Footer;
