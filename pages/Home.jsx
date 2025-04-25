import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              Enterprise-Grade AI Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter" data-aos="fade-up">
            Next-Generation<br />
            <span className="gradient-text">Resume Optimization</span>
          </h1>

          {/* Upload Area */}
          <div className="max-w-2xl mx-auto mt-12" data-aos="fade-up">
            <Link to="/analysis" className="block border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer transition-all hover:border-blue-600 hover:bg-white">
              <i className="fas fa-cloud-upload-alt text-4xl text-blue-600"></i>
              <div className="mt-6">
                <p className="text-xl font-semibold text-gray-900 mb-2">Secure Document Analysis</p>
                <p className="text-gray-600 text-sm">Supported formats: PDF, DOCX, TXT</p>
              </div>
            </Link>
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center space-x-4 mt-12" data-aos="fade-up">
            <Link to="/auth" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
              Get Started
            </Link>
            <a href="#features" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Features That Set Us Apart</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-brain text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Optimization</h3>
              <p className="text-gray-600">Smart suggestions to tailor your resume to job descriptions and keywords.</p>
            </div>

            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-chart-line text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">Deep insights into readability, keyword density, and ATS compliance.</p>
            </div>

            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-file-invoice text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1-Click Templates</h3>
              <p className="text-gray-600">Professional templates that make your resume stand out with a single click.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-8">
            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-search text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Job Recommendations</h3>
              <p className="text-gray-600">Get job alerts tailored to your skills and career preferences.</p>
            </div>

            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-chart-bar text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-time Job Market Trends</h3>
              <p className="text-gray-600">Stay informed with up-to-date industry trends, salaries, and demand.</p>
            </div>

            <div className="transition transform hover:scale-105 hover:bg-gray-50 rounded-lg shadow-md p-8 bg-white">
              <i className="fas fa-briefcase text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Gap Analysis</h3>
              <p className="text-gray-600">Identify missing skills and get recommendations on courses to fill them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Template Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Choose Your Template</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg" 
                alt="Classic Resume Template"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Classic Elegance</h3>
              <Link to="/templates" className="text-blue-600 hover:text-blue-700">Preview & Download</Link>
            </div>

            <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/8867184/pexels-photo-8867184.jpeg" 
                alt="Modern Resume Template"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Minimal</h3>
              <Link to="/templates" className="text-blue-600 hover:text-blue-700">Preview & Download</Link>
            </div>

            <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg" 
                alt="Creative Resume Template"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Creative Tech</h3>
              <Link to="/templates" className="text-blue-600 hover:text-blue-700">Preview & Download</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Get Actionable Resume Insights</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">85%</h3>
              <p className="text-gray-600 mt-2">ATS Compatibility</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">92%</h3>
              <p className="text-gray-600 mt-2">Readability</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">78%</h3>
              <p className="text-gray-600 mt-2">Keyword Match</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Supercharge Your Resume?</h2>
          <p className="text-lg text-gray-600 mb-6">Upload your resume now and get instant feedback with our AI-powered engine.</p>
          <div className="flex justify-center">
            <Link 
              to="/auth" 
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}