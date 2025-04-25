import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    jobType: 'all',
    remote: false
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .eq('is_remote', filters.remote)
      .ilike('location', `%${filters.location}%`);

    if (error) {
      console.error('Error fetching jobs:', error);
      return;
    }
    setJobs(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Next Opportunity</h1>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
            <select
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
              className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Job Types</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remote"
                checked={filters.remote}
                onChange={(e) => setFilters({ ...filters, remote: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remote" className="ml-2">Remote Only</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search Jobs
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {job.is_remote ? 'Remote' : job.location}
              </span>
            </div>
            <p className="mt-4 text-gray-600">{job.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.requirements?.map((req, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {req}
                </span>
              ))}
            </div>
            <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium">
              Apply Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}