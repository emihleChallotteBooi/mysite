import React from 'react';
import './ColumnLayout.css';

const ColumnLayout = ({ softwareImages, modellingImages }) => {
  const ImageSection = ({ title, images }) => (
    <article className="column-article">
      <h2>{title}</h2>
      <div className="image-stack">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title} ${idx + 1}`}
            className="article-image"
          />
        ))}
      </div>
    </article>
  );

  return (
    <section className="column-layout">
      <ImageSection title="Software Development" images={softwareImages} />
      <ImageSection title="Model Portfolio" images={modellingImages} />
    </section>
  );
};

export default ColumnLayout;
