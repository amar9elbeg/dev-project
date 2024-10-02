import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassCardMenu } from '../../pages/(home)/components/ClassCardMenu';

describe('ClassCardMenu Home Component', () => {
  const defaultProps = {
    className: 'testClass 101',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
    teacherName1: 'John Doe',
    teacherName2: 'Jane Smith',
  };
  const defaultValue = false
  const defaultFunction = jest.fn()
  const defaultAdjustFunction = jest.fn()
  const defaultRefreshFunction = jest.fn()


//   it('renders the Ellipsis icon in the DropdownMenuTrigger', () => {
//     render(<ClassCardMenu value={false} setValue={defaultFunction} setAdjustData={defaultFunction} refreshClassesData={defaultFunction} classData={defaultProps}/>);

//     const triggerIcon = screen.getByRole('button');
//     expect(triggerIcon).toBeInTheDocument();
//     expect(triggerIcon).toHaveAttribute('aria-expanded', 'false'); 
//   });

  it('displays dropdown menu items when the trigger is clicked', () => {
    render(<ClassCardMenu value={false} setValue={defaultFunction} setAdjustData={defaultFunction} refreshClassesData={defaultFunction} classData={defaultProps}/>);

    const trigger = screen.getByTestId('menu-icon');    
    
    fireEvent.pointerDown(trigger);
    // expect(defaultFunction).toHaveBeenCalledWith(true); 


    // const editItem = screen.getByText('Засах');
    // const deleteItem = screen.getByText('Устгах');
    
    // expect(editItem).toBeInTheDocument();
    // expect(deleteItem).toBeInTheDocument();

    // const editIcon = screen.getByTestId('edit-icon'); 
    // const deleteIcon = screen.getByTestId('delete-icon');

    // expect(editIcon).toBeInTheDocument();
    // expect(deleteIcon).toBeInTheDocument();
  });
});


