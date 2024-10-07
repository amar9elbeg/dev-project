import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Classcard } from '../../pages/(home)/components/Classcard';
import { Class, ClassType } from '../../generated';

const mockClassData: Class = {
  _id: '123',
  name: 'Sample Class',
  startDate: '2023-09-10T00:00:00Z',
  endDate: '2023-12-10T00:00:00Z',
  teachers: ['John Doe', 'Jane Smith'],
  type: ClassType.Coding,
};

jest.mock('../../pages/(home)/features/ClassCardMenu', () => ({
  ClassCardMenu: () => <div data-testid="class-card-menu">Menu</div>,
}));

const mockSetValue = jest.fn();
const mockSetAdjustData = jest.fn();
const mockRefreshClassesData = jest.fn();

describe('Classcard', () => {
  it('renders Classcard component with basic information', () => {
    render(
      <Classcard
        classData={mockClassData}
        value={false}
        setValue={mockSetValue}
        setAdjustData={mockSetAdjustData}
        refreshClassesData={mockRefreshClassesData}
      />
    );

    expect(screen.getByText('Sample Class')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByTestId('class-card-menu')).toBeInTheDocument();
  });

  it('handles empty teachers gracefully', () => {
    const mockClassDataWithoutTeachers = {
      ...mockClassData,
      teachers: [],
    };

    render(
      <Classcard
        classData={mockClassDataWithoutTeachers}
        value={false}
        setValue={mockSetValue}
        setAdjustData={mockSetAdjustData}
        refreshClassesData={mockRefreshClassesData}
      />
    );
    expect(screen.getAllByText('Unknown')).toHaveLength(2);
  });
});