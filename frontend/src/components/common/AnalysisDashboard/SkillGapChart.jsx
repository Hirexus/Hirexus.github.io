import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export const SkillGapChart = ({ skills }) => {
  return (
    <div className="skill-chart">
      <h3>Skill Match Analysis</h3>
      <BarChart width={500} height={300} data={skills}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="match" fill="#8884d8" />
        <Bar dataKey="required" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
