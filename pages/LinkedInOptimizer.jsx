import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LinkedInOptimizer() {
  const { register, handleSubmit } = useForm();
  const [analysis, setAnalysis] = useState(null);

  const onSubmit = async (data) => {
    // Simulate API call for LinkedIn profile analysis
    setAnalysis({
      profileScore: 85,
      recommendations: [
        'Add more keywords to your headline',
        'Include more quantifiable achievements',
        'Expand your network in your industry',
        'Post more relevant content'
      ],
      keywordSuggestions: ['leadership', 'innovation', 'strategy', 'management']
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">LinkedIn Profile Optimizer</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile URL
            </label>
            <input
              {...register('profileUrl')}
              type="url"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Industry
            </label>
            <input
              {...register('industry')}
              type="text"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Technology, Finance, Healthcare"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Analyze Profile
          </button>
        </form>
      </div>

      {analysis && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Profile Analysis</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {analysis.profileScore}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Profile Strength</p>
                <div className="w-48 h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${analysis.profileScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Recommendations</h3>
            <ul className="space-y-2">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Suggested Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keywordSuggestions.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}