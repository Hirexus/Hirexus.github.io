import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ResumeUpload } from '../../src/components/FileUploader/ResumeUpload'

describe('ResumeUpload Component', () => {
  test('renders dropzone with instructions', () => {
    render(<ResumeUpload onUpload={() => {}} />)
    expect(screen.getByText(/drag & drop/i)).toBeInTheDocument()
    expect(screen.getByText(/pdf.+docx/i)).toBeInTheDocument()
  })

  test('accepts valid file types', async () => {
    const file = new File(['test'], 'resume.pdf', { type: 'application/pdf' })
    const onUpload = jest.fn()
    
    render(<ResumeUpload onUpload={onUpload} />)
    await userEvent.upload(screen.getByTestId('dropzone-input'), file)
    
    expect(onUpload).toHaveBeenCalledWith(file)
  })

  test('rejects invalid file types', async () => {
    const file = new File(['test'], 'image.jpg', { type: 'image/jpeg' })
    const onUpload = jest.fn()
    
    render(<ResumeUpload onUpload={onUpload} />)
    await userEvent.upload(screen.getByTestId('dropzone-input'), file)
    
    expect(onUpload).not.toHaveBeenCalled()
  })
})
