import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from "react";
import { TestComponent } from '../pages/components/test'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<TestComponent text='test' />)
    expect(container).toBeDefined()
  })
})