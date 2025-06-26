import React, { useState } from "react";
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import './modelling.css';

const defaultImages = [
  { src: "/assets/caution.jpeg", alt: "Catwalk", key: "catwalk" },
  { src: "/assets/profile(photo).jpeg", alt: "Photos", key: "photos" },
  { src: "/assets/nude.jpeg", alt: "Nude", key: "nude" },
];

const catwalk = [
  { src: "/assets/catwalk4.jpeg", alt: "Catwalk 1" },
  { src: "/assets/catwalk0.jpeg", alt: "Catwalk 2" },
  { src: "/assets/catwalk1.jpeg", alt: "Catwalk 5" },
];

const photos = [
  { src: "/assets/photo0.jpeg", alt: "Photo 1" },
  { src: "/assets/photo1.jpeg", alt: "Photo 2" },
  { src: "/assets/photo2.jpeg", alt: "Photo 3" },
];

const nude = [
  { src: "/assets/nude0.jpeg", alt: "Nude 1" },
  { src: "/assets/nude1.jpeg", alt: "Nude 2" },
  { src: "/assets/nude2.jpeg", alt: "Nude 3" },
];

function Modelling() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [topIndex, setTopIndex] = useState(0);

  const categoryMap = { catwalk, photos, nude };

  const handle3DView = (categoryKey) => {
    setActiveCategory(categoryKey);
    setTopIndex(categoryMap[categoryKey].length - 1);
  };

  const handleBackToDefault = () => {
    setActiveCategory(null);
  };

  const bringToFront = (index) => {
    setTopIndex(index);
  };

  const imagesToShow = activeCategory ? categoryMap[activeCategory] : [];

  return (
    <>
      <header>
        {activeCategory && (
          <div className="back-text" onClick={handleBackToDefault}>
            ← Back
          </div>
        )}
      </header>
      <main>
        {!activeCategory ? (
          <div className="image-row">
            {defaultImages.map((img, i) => (
              <div key={i} className="model-image-wrapper">
                <img src={img.src} alt={img.alt} className="model-image" />
                <div
                  className="overlay-text"
                  onClick={() => handle3DView(img.key)}
                >
                  View 3D
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="stack-container">
            {imagesToShow.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`stacked-image ${i === topIndex ? "active" : ""}`}
                style={{ zIndex: i === topIndex ? 100 : i }}
                onClick={() => bringToFront(i)}
              />
            ))}
          </div>
        )}

        <Nav showAbout={false} showHome={true} showResume={true} showPortfolio={true} />
        <h3>THANK YOU FOR VIEWING</h3>
      </main>
      <Footer />
    </>
  );
}

export default Modelling;
