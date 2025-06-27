import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";
import './landing.css';

function Landing() {
  return (
    <>
      <header>
        <h1 id="header-title">Q_Challotte</h1>
      </header>

      <main>

            <section id="right">
          <img
            src="/assets/landing.png"
            alt="Landing Page Image"
            id="landing-image"
            loading="lazy"
          />
        </section>
        <section id="left">
          <section id="heading">
            <h1>Welcome to</h1>
            <h1>Q_Challotte</h1>
          </section>

          <section id="paragraph">
            <p>
              Hey there, I'm a developer, model and the most optimistic person you'll ever meet.
              Inside you will find my work, software projects and interests.
            </p>
            <p>
              This platform aims to reach audience that will appreciate my work and hopefully be
              inclined to feature me in opportunities they might have. Please reach out to me
              using the social icons.
            </p>
          </section>

          {/* ✅ Move the button inside #left */}
          <Link to="/home" id="button" className="button">
            Welcome
          </Link>
        </section>

    
      </main>

      <Nav showAbout={true} showHome={false} showModelling={false} showSoftware={false} />
      <Footer />
    </>
  );
}

export default Landing;
