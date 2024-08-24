// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 

// import ClassCardMenu from '../../pages/components/class/ClassCardMenu';


// describe('ClassCardMenu', () => {
//   it('renders the menu icon', () => {
//     render(<ClassCardMenu />);
//     expect(screen.getByRole('button')).toBeInTheDocument(); 
//   });

//   it('opens the menu when the icon is clicked', () => {
//     render(<ClassCardMenu />);
//     fireEvent.click(screen.getByRole('button'));

//     expect(screen.getByText('Засах')).toBeInTheDocument();
//     expect(screen.getByText('Устгах')).toBeInTheDocument();
//   });

//   it('triggers the correct actions when menu items are clicked', () => {
//     render(<ClassCardMenu />);
//     fireEvent.click(screen.getByRole('button'));

//     const editOption = screen.getByText('Засах');
//     const deleteOption = screen.getByText('Устгах');


//     fireEvent.click(editOption);

//     fireEvent.click(deleteOption);

//   });
// });
