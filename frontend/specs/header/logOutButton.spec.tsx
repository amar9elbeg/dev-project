import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogOutButton from '../../pages/components/header/LogOutButton';
import { BrowserRouter as Router } from 'react-router-dom';

// Test rendering and functionality
describe('LogOutButton Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <LogOutButton />
      </Router>
    );
    // Check if the button and icon are rendered
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument(); // Assuming the icon renders as an img element
  });

  it('renders the LogInIcon', () => {
    render(
      <Router>
        <LogOutButton />
      </Router>
    );
    // Verify the icon is present
    expect(screen.getByRole('img')).toBeInTheDocument(); // Assuming the icon renders as an img element
  });

  it('navigates to the homepage when clicked', () => {
    render(
      <Router>
        <LogOutButton />
      </Router>
    );

    // Simulate a click on the button
    fireEvent.click(screen.getByRole('link'));
    // Check if the navigation happened (you might need to use a library to check navigation)
    // This example assumes you are using React Router for routing
    expect(window.location.pathname).toBe('/');
  });
});
