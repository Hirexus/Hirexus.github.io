import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <Link to="/" className="logo">ResumeAI</Link>
        <div className="nav-links">
          <Link to="/analysis">Analyze</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
};
