import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const ResumeUpload = ({ onUpload }) => {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    onUpload(file);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    }
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your resume here...</p>
      ) : (
        <p>Drag & drop resume, or click to select</p>
      )}
    </div>
  );
};
