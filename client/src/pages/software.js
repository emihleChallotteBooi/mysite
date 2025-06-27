// src/pages/Software.js
import React from 'react';
import Footer from '../components/footer.js';
import ColumnLayout from '../components/ColumnLayout.js';
import RightPanel from '../components/RightPanel.js';
import Nav from '../components/nav.js';
import './software.css';

const softwareImages = [
  '/assets/currentProjects.png',
  '/assets/interest.png',
  '/assets/pastProjects.png',
];

function Software() {
  return (
    <>
      <header></header>

      <main className="software-main">
        <section className="column-layout">
          <ColumnLayout softwareImages={softwareImages} />
        </section>

        <aside className="right-panel">
          <RightPanel />
        </aside>
      </main>

      <Nav showAbout={false} showHome={true} showResume={true} showModelling={false} />
      <Footer />
    </>
  );
}

export default Software;
