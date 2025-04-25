import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResumeAnalysis from './pages/ResumeAnalysis';
import JobSearch from './pages/JobSearch';
import Templates from './pages/Templates';
import LinkedInOptimizer from './pages/LinkedInOptimizer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<ResumeAnalysis />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/linkedin" element={<LinkedInOptimizer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;