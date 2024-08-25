import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DatePicker } from '../../pages/(common)/components/DatePicker';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const setup = () => {
  const initialValues = { date: '' };
  const validationSchema = Yup.object({
    date: Yup.string().required('Date is required'),
  });

  const utils = render(
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
      <Form>
        <DatePicker name="date" label="Select a date" />
      </Form>
    </Formik>
  );
  return { ...utils };
};

describe('DatePicker Component', () => {
  it('renders the DatePicker with label', () => {
    setup();
    const label = screen.getByText('Select a date')
    const dateInputButton = screen.getByText('Огноо оруулна уу.')
    expect(label).toBeInTheDocument();
    expect(dateInputButton).toBeInTheDocument();
  });

  it('display calendar when clicked daypicker element', async ()=>{
    setup();

    const dateInputButton = screen.getByTestId('date-input-button');
    expect(dateInputButton).toBeInTheDocument();
    
    fireEvent.focus(dateInputButton)

      // const calendar=screen.getByTestId('calendar-dialog');
      // expect(calendar).toBeInTheDocument();
      // const calendarDialog = screen.getByTestId('calendar-dialog');
      // expect(calendarDialog).toBeInTheDocument();

  })
});
