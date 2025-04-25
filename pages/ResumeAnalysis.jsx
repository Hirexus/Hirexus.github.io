import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '../lib/supabaseClient';

function ResumeAnalysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = async (acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    
    try {
      // Upload file to Supabase storage
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(`${Date.now()}-${file.name}`, file);

      if (error) throw error;

      // Trigger analysis
      const { data: analysisData } = await supabase.functions.invoke('analyze-resume', {
        body: { fileUrl: data.path }
      });

      setAnalysis(analysisData);
    } catch (error) {
      console.error('Error analyzing resume:', error);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Resume Analysis</h1>
      
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag & drop your resume here, or click to select file</p>
      </div>

      {loading && (
        <div className="mt-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4">Analyzing your resume...</p>
        </div>
      )}

      {analysis && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700">ATS Score</h3>
                <p className="text-3xl font-bold text-blue-600">{analysis.atsScore}%</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Keyword Match</h3>
                <p className="text-3xl font-bold text-blue-600">{analysis.keywordMatch}%</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium text-gray-700 mb-2">Suggestions</h3>
              <ul className="list-disc pl-5 space-y-2">
                {analysis.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-600">{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalysis;