import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Hirexus Pro</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/analysis" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Resume Analysis
              </Link>
              <Link to="/jobs" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Job Search
              </Link>
              <Link to="/templates" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Templates
              </Link>
              <Link to="/linkedin" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                LinkedIn Optimizer
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={signOut}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}