import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassCard from '../../pages/components/class/Classcard';
import ClassCardMenu from '../../pages/components/class/ClassCardMenu';

// Mock the ClassCardMenu component since we don't need to test its functionality here
jest.mock('./ClassCardMenu', () => () => <div data-testid="class-card-menu"></div>);

describe('ClassCard Component', () => {
  it('renders the class name and dates correctly', () => {
    render(
      <ClassCard 
        className="Math 101" 
        startDate="2024-09-01" 
        endDate="2024-12-15" 
        teacherName1="John Doe" 
        teacherName2="Jane Smith"
      />
    );

    // Check if the class name is rendered
    expect(screen.getByText('MATH 101')).toBeInTheDocument();

    // Check if the start and end dates are rendered
    expect(screen.getByText('2024-09-01 - 2024-12-15')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('renders the ClassCardMenu component', () => {
    render(
      <ClassCard 
        className="Math 101" 
        startDate="2024-09-01" 
        endDate="2024-12-15" 
        teacherName1="John Doe" 
        teacherName2="Jane Smith"
      />
    );

    // Check if the ClassCardMenu component is rendered
    expect(screen.getByTestId('class-card-menu')).toBeInTheDocument();
  });
});

