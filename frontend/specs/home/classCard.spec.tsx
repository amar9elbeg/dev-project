import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Classcard } from '../../pages/(home)/components/Classcard';
import { ClassCardMenu } from '../../pages/(home)/components/ClassCardMenu'; // Update with the correct path

describe('Classcard Component', () => {
  const defaultProps = {
    className: 'testClass 101',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
    teacherName1: 'John Doe',
    teacherName2: 'Jane Smith',
  };

  it('renders correctly with given props', () => {
    render(<Classcard {...defaultProps} />);

    const classNameElement = screen.getByText(defaultProps.className);
    expect(classNameElement).toBeInTheDocument();

    const dateRangeElement = screen.getByText(`${defaultProps.startDate} - ${defaultProps.endDate}`);
    expect(dateRangeElement).toBeInTheDocument();

    const teacherName1Element = screen.getByText(defaultProps.teacherName1);
    const teacherName2Element = screen.getByText(defaultProps.teacherName2);
    expect(teacherName1Element).toBeInTheDocument();
    expect(teacherName2Element).toBeInTheDocument();
  });

  it('renders ClassCardMenu in the CardTitle', () => {
    render(<Classcard {...defaultProps} />);

    const classCardMenuElement = screen.getByRole('button'); 
    expect(classCardMenuElement).toBeInTheDocument();
  });
});
