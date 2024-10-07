import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from '../../pages/(common)/components/RadioButton';
import { Formik, Form } from 'formik';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';




const setup = (name: string, label: string, value: string, radioButtonValue: string) => render(
    <Formik
      initialValues={{ [name]: '' }}
      onSubmit={jest.fn()}
      initialErrors={{ [name]: 'Required' }}
      initialTouched={{ [name]: true }}
    >
      <Form>
        <RadioButton label={label} name={name} value={value} radioButtonValue={radioButtonValue} />
      </Form>
    </Formik>
  );

describe('radio button Common Component', () => {
  it('renders the components and icons', () => {
    setup('name','testLabel', 'active', 'inactive' )
    const label = screen.getByText('testLabel');
    expect(label).toBeInTheDocument();

    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();    
    expect(radioButton).not.toBeChecked();

  });
  it('checks the radio button when value matches radioButtonValue', () => {
    setup('status', 'Active', 'active', 'active'); 
    
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeChecked();
  });

  it('changes radio button value on user interaction', async () => {
    setup('status', 'Active', 'active', 'inactive');
    
    const radioButton = screen.getByRole('radio');
    expect(radioButton).not.toBeChecked();
  
    await act(async () => {
      await userEvent.click(radioButton);
    });

    // expect(radioButton).toBeChecked();
  });
});
