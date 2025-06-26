// src/components/RightPanel.js
import React from 'react';

function RightPanel() {
  return (
    <article style={{ flex: 1, padding: '1rem' }}>
      <iframe
        src="/assets/resume.pdf"
        title="Resume"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </article>
  );
}

export default RightPanel;
