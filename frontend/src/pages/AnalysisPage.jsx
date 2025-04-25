import React from 'react';
import { SkillGapChart } from '../components/AnalysisDashboard/SkillGapChart';
import { KeywordCloud } from '../components/AnalysisDashboard/KeywordCloud';
import { ResumePreview } from '../components/AnalysisDashboard/ResumePreview';

export const AnalysisPage = ({ analysisData }) => {
  return (
    <div className="analysis-page">
      <div className="dashboard">
        <ResumePreview file={analysisData.file} />
        <SkillGapChart skills={analysisData.skills} />
        <KeywordCloud keywords={analysisData.keywords} />
      </div>
    </div>
  );
};
