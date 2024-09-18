import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from '../../pages/(common)/components/RadioButton';
import { Formik, Form } from 'formik';


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
    const label = screen.getByText('inputLabel');

    expect(label).toBeInTheDocument();


  });
});
