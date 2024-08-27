import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { useField, useFormikContext, Formik } from 'formik';
import { DatePicker } from '../../pages/(common)/components/DatePicker'; // Adjust the import path
import '@testing-library/jest-dom/extend-expect';
import { format } from 'date-fns'; // Add this import


jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useField: jest.fn(),
  useFormikContext: jest.fn(),
}));

describe('DatePicker', () => {
  const mockSetFieldValue = jest.fn();
  const mockSetFieldTouched = jest.fn();

  beforeEach(() => {
    useField.mockReturnValue([
      {
        name: 'date',
        value: '',
        onChange: jest.fn(),
        onBlur: jest.fn(),
      },
      { touched: false, error: undefined },
      { setValue: mockSetFieldValue, setTouched: mockSetFieldTouched },
    ]);

    useFormikContext.mockReturnValue({
      setFieldTouched: mockSetFieldTouched,
    });
  });

  it('displays the calendar when the daypicker element is clicked', async () => {
    const { container } = render(
      <Formik initialValues={{ date: '' }} onSubmit={() => { }}>
        <DatePicker name="date" label="Select a date" />
      </Formik>
    );

    const dateInputButton = screen.getByTestId('date-input-button')

    act(() => {
      fireEvent.click(dateInputButton);
    })

    const calendarDialog = screen.getByTestId('calendar-dialog');
    expect(calendarDialog).toBeInTheDocument();
    const buttonNine = screen.getByText('9');
    expect(buttonNine).toBeInTheDocument();

    fireEvent.click(buttonNine);

  });

  it('displays the placeholder text when no date is selected', () => {
    render(
      <Formik initialValues={{ date: '' }} onSubmit={() => { }}>
        <DatePicker name="date" label="Select a date" />
      </Formik>
    );

    const dateInputButton = screen.getByTestId('date-input-button');
    expect(dateInputButton).toHaveTextContent('Огноо оруулна уу.');
  });

  it('displays the formatted date when a date is selected', () => {
    const selectedDate = new Date(2023, 7, 24).toISOString();

    useField.mockReturnValue([
      { value: selectedDate },
      { touched: false, error: '' },
      { setValue: mockSetFieldValue }
    ]);

    render(
      <Formik initialValues={{ date: '' }} onSubmit={() => { }}>
        <DatePicker name="date" label="Select a date" />
      </Formik>
    );

    const dateInputButton = screen.getByTestId('date-input-button');
    expect(dateInputButton).toHaveTextContent(format(new Date(selectedDate), "PPP"));
  });




  it('calls setValue with ISO string when a date is selected', () => {
    render(
      <Formik initialValues={{ date: '' }} onSubmit={() => { }}>
        <DatePicker name="date" label="Select a date" />
      </Formik>
    );

    const dateInputButton = screen.getByTestId('date-input-button');
    fireEvent.click(dateInputButton);

    const buttonNine = screen.getByText('9');
    fireEvent.click(buttonNine);

    expect(mockSetFieldValue).toHaveBeenCalledWith(expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/));
  });



  it('displays an error message when touched and there is an error', () => {
    useField.mockReturnValue([
      { value: '' },
      { touched: true, error: 'Required' },
      { setValue: mockSetFieldValue }
    ]);

    render(
      <Formik initialValues={{ date: '' }} onSubmit={() => { }}>
        <DatePicker name="date" label="Select a date" />
      </Formik>
    );

    const errorMessage = screen.getByText('Required');
    expect(errorMessage).toBeInTheDocument();
  });

});

