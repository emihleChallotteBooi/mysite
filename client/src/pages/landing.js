import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

function Landing() {
  return (
    <>
      <header></header>
      <main>
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
        </section>

        <section id="image"></section>

       

        <Link to="/home" id="button" className="button">
          Welcome
        </Link>
      </main>
      <Nav showAbout={true} showHome={false} showModelling={false} showSoftware={false} />
      <Footer />
    </>
  );
}

export default Landing;
