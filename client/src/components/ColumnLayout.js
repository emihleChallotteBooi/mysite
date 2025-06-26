import React from 'react';
import './ColumnLayout.css';
import { Link } from 'react-router-dom';

const ColumnLayout = ({ softwareImages, modellingImages }) => {
  const ImageSection = ({ title, images, linkTo }) => (
    <article className="column-article">
      <h2>
        <Link to={linkTo} className="section-link">
          {title}
        </Link>
      </h2>
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
      {softwareImages && (
        <ImageSection
          title="Software Development"
          images={softwareImages}
          linkTo="/software"
        />
      )}
      {modellingImages && (
        <ImageSection
          title="Model Portfolio"
          images={modellingImages}
          linkTo="/modelling"
        />
      )}
    </section>
  );
};

export default ColumnLayout;
