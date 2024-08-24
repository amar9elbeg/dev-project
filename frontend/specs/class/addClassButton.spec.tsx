// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import AddClassButton from '../../pages/components/class/AddClassButton';

// // Mock the child components
// jest.mock('./AddClassInput', () => ({ label, name, ...props }: { label: string; name: string }) => (
//   <div>
//     <label htmlFor={name}>{label}</label>
//     <input id={name} name={name} {...props} />
//   </div>
// ));

// jest.mock('./DatePicker', () => ({ label, name }: { label: string; name: string }) => (
//   <div>
//     <label htmlFor={name}>{label}</label>
//     <input id={name} name={name} type="date" />
//   </div>
// ));

// jest.mock('../icons/RightVector', () => () => <svg />); // Mock for RightVector icon

// describe('AddClassButton Component', () => {
//   it('renders without crashing', () => {
//     render(<AddClassButton />);

//     // Check if the dialog trigger is rendered
//     expect(screen.getByText('Анги +')).toBeInTheDocument();
//   });

//   it('opens the dialog and renders form fields', () => {
//     render(<AddClassButton />);

//     // Open the dialog by clicking the trigger button
//     fireEvent.click(screen.getByText('Анги +'));

//     // Check if the dialog content and form fields are rendered
//     expect(screen.getByText('Анги нэмэх')).toBeInTheDocument();
//     expect(screen.getByLabelText('Ангиин нэр:')).toBeInTheDocument();
//     expect(screen.getByLabelText('Багш 1-н нэр:')).toBeInTheDocument();
//     expect(screen.getByLabelText('Багш 2-н нэр:')).toBeInTheDocument();
//     expect(screen.getByLabelText('Эхлэх огноо:')).toBeInTheDocument();
//     expect(screen.getByLabelText('Дуусах огноо:')).toBeInTheDocument();
//     expect(screen.getByText('Хадгалах')).toBeInTheDocument();
//   });

//   it('validates and submits the form', async () => {
//     render(<AddClassButton />);

//     // Open the dialog
//     fireEvent.click(screen.getByText('Анги +'));

//     // Fill in the form fields
//     fireEvent.change(screen.getByLabelText('Ангиин нэр:'), { target: { value: 'Math 101' } });
//     fireEvent.change(screen.getByLabelText('Багш 1-н нэр:'), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText('Багш 2-н нэр:'), { target: { value: 'Jane Smith' } });
//     fireEvent.change(screen.getByLabelText('Эхлэх огноо:'), { target: { value: '2024-01-01' } });
//     fireEvent.change(screen.getByLabelText('Дуусах огноо:'), { target: { value: '2024-12-31' } });

//     // Submit the form
//     fireEvent.click(screen.getByText('Хадгалах'));

//     // Check if form submission is handled (currently just checking if no errors are shown)
//     // You can mock and verify the form submission logic if needed
//   });
// });
