// src/pages/Software.js
import React from 'react';
import Footer from '../components/footer.js';
import ColumnLayout from '../components/ColumnLayout.js';
import RightPanel from '../components/RightPanel.js';

const softwareImages = [
  '/assets/currentProjects.png',
  '/assets/interest.png',
  '/assets/pastProjects.png',
];

function Software() {
  return (
    <>
      <header></header>

      <main style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <ColumnLayout softwareImages={softwareImages} />
        <RightPanel />
      </main>

      <Footer />
    </>
  );
}

export default Software;
