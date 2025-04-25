import React from 'react';

export const KeywordCloud = ({ keywords }) => {
  return (
    <div className="keyword-cloud">
      <h3>Top Keywords</h3>
      <div className="cloud-container">
        {keywords.map((word, index) => (
          <span 
            key={index}
            className="keyword"
            style={{ fontSize: `${word.importance * 20}px` }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};
