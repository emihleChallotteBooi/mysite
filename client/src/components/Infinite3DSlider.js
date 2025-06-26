// src/components/Infinite3DSlider.js
import React from "react";
import "./Infinite3DSlider.css";

const images = [
  '/assets/photo0.jpeg',
  '/assets/photo1.jpeg',
  '/assets/photo2.jpeg',
];

export default function Infinite3DSlider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {[...images, ...images].map((src, idx) => (
          <div className="slide" key={idx}>
            <img src={src} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
