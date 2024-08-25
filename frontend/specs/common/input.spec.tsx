import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { Input } from '../../pages/(common)/components/Input';
import '@testing-library/jest-dom';

const setup = (name: string, labelText: string) => render(
  <Formik
    initialValues={{ [name]: '' }}
    onSubmit={jest.fn()}
    initialErrors={{ [name]: 'Required' }}
    initialTouched={{ [name]: true }}
  >
    <Form>
      <Input label={labelText} name={name} type="text" placeholder="Enter your username" />
    </Form>
  </Formik>
);

describe('Input common component', () => {

  it('renders input with label and props', () => {
    setup('inputTest', 'inputLabel');

    const label = screen.getByText('inputLabel');
    const input = screen.getByPlaceholderText('Enter your username');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('displays error message when there is an error', async () => {
    setup('username', 'Username');

    const errorMessage = screen.getByText('Required');

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message when not touched', () => {
    render(
      <Formik
        initialValues={{ username: '' }}
        onSubmit={jest.fn()}
      >
        <Form>
          <Input label="Username" name="username" type="text" placeholder="Enter your username" />
        </Form>
      </Formik>
    );

    const errorMessage = screen.queryByText('Required');
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('does not display error message when there is an error but not touched', () => {
    render(
      <Formik
        initialValues={{ username: '' }}
        onSubmit={jest.fn()}
        initialErrors={{ username: 'Required' }}
        initialTouched={{ username: false }}
      >
        <Form>
          <Input label="Username" name="username" type="text" placeholder="Enter your username" />
        </Form>
      </Formik>
    );

    const errorMessage = screen.queryByText('Required');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
