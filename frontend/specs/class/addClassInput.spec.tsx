// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Formik, Form } from 'formik';
// import AddClassInput from '../../pages/components/class/AddClassInput';

// describe('AddClassInput Component', () => {

//   it('renders input and label correctly', () => {
//     render(
//       <Formik
//         initialValues={{ className: '' }}
//         onSubmit={() => {}}
//       >
//         <Form>
//           <AddClassInput 
//             label="Class Name:" 
//             name="className" 
//             type="text" 
//             placeholder="Enter class name"
//           />
//         </Form>
//       </Formik>
//     );

//     // Check if the label is rendered
//     expect(screen.getByLabelText('Class Name:')).toBeInTheDocument();

//     // Check if the input is rendered with the correct placeholder
//     expect(screen.getByPlaceholderText('Enter class name')).toBeInTheDocument();
//   });

//   it('updates the value when typed into', () => {
//     render(
//       <Formik
//         initialValues={{ className: '' }}
//         onSubmit={() => {}}
//       >
//         <Form>
//           <AddClassInput 
//             label="Class Name:" 
//             name="className" 
//             type="text" 
//             placeholder="Enter class name"
//           />
//         </Form>
//       </Formik>
//     );

//     const input = screen.getByPlaceholderText('Enter class name');
    
//     // Simulate user typing
//     fireEvent.change(input, { target: { value: 'Math 101' } });
    
//     // Check if the input's value has been updated
//     expect(input).toHaveValue('Math 101');
//   });

//   it('shows error message when input is invalid and touched', async () => {
//     render(
//       <Formik
//         initialValues={{ className: '' }}
//         initialErrors={{ className: 'Class name is required' }}
//         initialTouched={{ className: true }}
//         onSubmit={() => {}}
//       >
//         <Form>
//           <AddClassInput 
//             label="Class Name:" 
//             name="className" 
//             type="text" 
//             placeholder="Enter class name"
//           />
//         </Form>
//       </Formik>
//     );

//     // Check if the error message is displayed
//     expect(screen.getByText('Class name is required')).toBeInTheDocument();
//   });

// });
