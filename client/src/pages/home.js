import React from 'react';
import Footer from '../components/footer.js';
import ColumnLayout from '../components/ColumnLayout.js';

const softwareImages = [
  '/assets/photo0.jpeg',
  '/assets/photo1.jpeg',
  '/assets/photo2.jpeg',
];

const modellingImages = [
  '/assets/nude.jpeg',
  '/assets/catwalk0.jpeg',
  '/assets/catwalk4.jpeg',
];

function Home() {
  return (
    <>
      <header></header>
      <main>
        <ColumnLayout
          softwareImages={softwareImages}
          modellingImages={modellingImages}
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
