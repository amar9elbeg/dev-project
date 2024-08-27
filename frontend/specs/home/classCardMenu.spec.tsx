import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassCardMenu } from '../../pages/(home)/components/ClassCardMenu';

describe('ClassCardMenu Home Component', () => {
  it('renders the Ellipsis icon in the DropdownMenuTrigger', () => {
    render(<ClassCardMenu />);

    const triggerIcon = screen.getByRole('button');
    expect(triggerIcon).toBeInTheDocument();
    expect(triggerIcon).toHaveAttribute('aria-expanded', 'false'); 
  });

  // it('displays dropdown menu items when the trigger is clicked', () => {
  //   render(<ClassCardMenu />);

  //   const trigger = screen.getByTestId('menu-icon');    
    
  //   fireEvent.click(trigger);
  //   expect(trigger).toHaveAttribute('aria-expanded', 'true'); 


  //   const editItem = screen.getByText('Засах');
  //   // const deleteItem = screen.getByText('Устгах');
    
  //   // expect(editItem).toBeInTheDocument();
  //   // expect(deleteItem).toBeInTheDocument();

  //   // const editIcon = screen.getByTestId('edit-icon'); 
  //   // const deleteIcon = screen.getByTestId('delete-icon');

  //   // expect(editIcon).toBeInTheDocument();
  //   // expect(deleteIcon).toBeInTheDocument();
  // });
});
