import React from 'react';
import { Document, Page } from 'react-pdf';

export const ResumePreview = ({ file }) => {
  return (
    <div className="resume-preview">
      <h3>Resume Preview</h3>
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
