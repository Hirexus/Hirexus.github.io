import React from 'react';
import { ResumeUpload } from '../components/FileUploader/ResumeUpload';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>AI-Powered Resume Analysis</h1>
      <ResumeUpload onUpload={(file) => console.log('Upload:', file)} />
    </div>
  );
};
