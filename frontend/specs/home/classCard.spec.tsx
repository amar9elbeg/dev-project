import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Classcard } from '../../pages/(home)/components/Classcard';
import { Class, ClassType} from "../../generated";


const mockClassData: Class = {
  _id: '123',
  name: 'Sample Class',
  startDate: '2023-09-10T00:00:00Z',
  endDate: '2023-12-10T00:00:00Z',
  teachers: ['John Doe', 'Jane Smith'],
  type: ClassType.Coding
};

describe('Classcard', () => {
  const mockSetValue = jest.fn();
  const mockSetAdjustData = jest.fn();
  const mockRefreshClassesData = jest.fn();

  // it('renders class details correctly', () => {
  //     render(
  //         <Classcard
  //             classData={mockClassData}
  //             value={false}
  //             setValue={mockSetValue}
  //             setAdjustData={mockSetAdjustData}
  //             refreshClassesData={mockRefreshClassesData}
  //         />
  //     );

  //     expect(screen.getByText('Sample Class')).toBeInTheDocument();

  //     expect(screen.getByText('23.09.10 - 23.12.10')).toBeInTheDocument();

  //     expect(screen.getByText('John Doe')).toBeInTheDocument();
  //     expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  // });

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

      // Test if "Unknown" is displayed for missing teachers
      expect(screen.getAllByText('Unknown')).toHaveLength(2);
  });

  // it('renders the class menu', () => {
  //     render(
  //         <Classcard
  //             classData={mockClassData}
  //             value={false}
  //             setValue={mockSetValue}
  //             setAdjustData={mockSetAdjustData}
  //             refreshClassesData={mockRefreshClassesData}
  //         />
  //     );

  //     // Check if the ClassCardMenu is rendered
  //     expect(screen.getByTestId('class-card-menu')).toBeInTheDocument();
  // });

  // it('navigates to the correct class URL', () => {
  //     render(
  //         <Classcard
  //             classData={mockClassData}
  //             value={false}
  //             setValue={mockSetValue}
  //             setAdjustData={mockSetAdjustData}
  //             refreshClassesData={mockRefreshClassesData}
  //         />
  //     );

  //     // Ensure the class card link exists and has the correct href
  //     const linkElement = screen.getByText('Sample Class').closest('a');
  //     expect(linkElement).toHaveAttribute('href', `/classhome/123`);
  // });
});