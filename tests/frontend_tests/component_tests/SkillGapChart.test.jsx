import React from 'react'
import { render, screen } from '@testing-library/react'
import { SkillGapChart } from '../../src/components/AnalysisDashboard/SkillGapChart'

const mockSkills = [
  { name: 'Python', match: 90, required: 100 },
  { name: 'React', match: 70, required: 85 }
]

test('renders skill chart with correct data', () => {
  render(<SkillGapChart skills={mockSkills} />)
  
  // Test chart rendering
  expect(screen.getByText('Skill Match Analysis')).toBeInTheDocument()
  expect(screen.getByText('Python')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  
  // Test bar chart presence
  expect(screen.getByRole('img', { name: 'skill-chart' })).toBeVisible()
})

test('handles empty skills', () => {
  render(<SkillGapChart skills={[]} />)
  expect(screen.getByText('No skill data available')).toBeInTheDocument()
})
