import React from "react";
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import './modelling.css'; 
function Modelling() {
  return (
    <>
      <header></header>
      <main>
        {/* Flexbox container for images */}
        <div className="image-row">
          <img src="/assets/caution.jpeg" alt="Model 1" className="model-image" />
          <img src="/assets/profile(photo).jpeg" alt="Model 2" className="model-image" />
          <img src="/assets/nude.jpeg" alt="Model 3" className="model-image" />
        </div>

        <Nav showAbout={false} showHome={true} showResume={false} showPortfolio={true} />
      </main>
      <Footer />
    </>
  );
}

export default Modelling;
