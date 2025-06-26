// src/pages/Software.js
import React from 'react';
import Footer from '../components/footer.js';
import ColumnLayout from '../components/ColumnLayout.js';
import RightPanel from '../components/RightPanel.js';

const softwareImages = [
  '/assets/photo0.jpeg',
  '/assets/photo1.jpeg',
  '/assets/photo2.jpeg',
];

function Software() {
  return (
    <>
      <header></header>

      {/* Flex container for left and right columns */}
      <main style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        {/* Left side: software content */}
        <ColumnLayout softwareImages={softwareImages} />

        {/* Right side: PDF Resume */}
        <RightPanel />
      </main>

      <Footer />
    </>
  );
}

export default Software;
