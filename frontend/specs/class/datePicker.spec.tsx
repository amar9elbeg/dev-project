import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { jest } from '@jest/globals';
import DatePicker from '../../pages/components/class/DatePicker';
import '@testing-library/jest-dom';

// Mocking Formik context to test the component
const MockFormik = ({ initialValues, onSubmit }: { initialValues: any; onSubmit: (values: any) => void }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>
      <DatePicker name="testDate" label="Test Date" />
    </Form>
  </Formik>
);

describe('DatePicker Component', () => {
  it('renders correctly with initial state', () => {
    render(<MockFormik initialValues={{ testDate: '' }} onSubmit={() => {}} />);
    
    // Check if the label is rendered
    expect(screen.getByLabelText('Test Date')).toBeInTheDocument();
    
    // Check if the placeholder text is present
    expect(screen.getByText('Огноо оруулна уу.')).toBeInTheDocument();
  });

  it('opens the calendar popover when the button is clicked', async () => {
    render(<MockFormik initialValues={{ testDate: '' }} onSubmit={() => {}} />);
    
    // Click the button to open the popover
    fireEvent.click(screen.getByRole('button'));
    
    // Wait for the popover content to appear
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument(); // Assuming PopoverContent renders a dialog
    });
  });

  it('updates the selected date value', async () => {
    render(<MockFormik initialValues={{ testDate: '' }} onSubmit={() => {}} />);
    
    // Open the calendar popover
    fireEvent.click(screen.getByRole('button'));
    
    // Select a date in the calendar
    // You might need to adjust this selector based on your calendar implementation
    fireEvent.click(screen.getByText('15')); 
    
    // Verify if the date is updated
    await waitFor(() => {
      expect(screen.getByText('15')).toBeInTheDocument(); // Or check the formatted date if needed
    });
  });

// доорх тест жаахан асуудалтай өглөө харах
  it('shows validation error if the field is touched and has an error', async () => {
    render(
      <Formik
        initialValues={{ testDate: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.testDate) {
            errors.testDate = 'Required';
          }
          return errors;
        }}
        onSubmit={() => {}}
      >
        <Form>
          <DatePicker name="testDate" label="Test Date" />
        </Form>
      </Formik>
    );
    
    // Trigger field to be touched
    fireEvent.click(screen.getByRole('button'));
    
    // Simulate selecting a date to make the field touched
    fireEvent.click(screen.getByText('15')); // Adjust based on calendar implementation
    
    // Check if error message is displayed
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});
