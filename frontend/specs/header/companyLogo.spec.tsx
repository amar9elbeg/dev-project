import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import CompanyLogo from '../../pages/components/header/CompanyLogo';


// Mock the CompanyLogoIcon component if needed
jest.mock('../icons/CompanyLogoIcon', () => () => <div>CompanyLogoIcon</div>);

describe('CompanyLogo Component', () => {
  it('renders without crashing', () => {
    render(<CompanyLogo />);
    expect(screen.getByText('CompanyLogoIcon')).toBeInTheDocument();
  });

  it('renders the CompanyLogoIcon component', () => {
    render(<CompanyLogo />);
    expect(screen.getByText('CompanyLogoIcon')).toBeInTheDocument();
  });

  it('links to the home page', () => {
    render(<CompanyLogo />);

    // Find the link and verify its href attribute
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('navigates to the home page when clicked', () => {
    // Mocking window.location for testing navigation
    delete window.location;
    window.location = { href: '' } as any;

    render(<CompanyLogo />);

    // Simulate a click on the link
    fireEvent.click(screen.getByRole('link'));

    // Verify that window.location.href was updated
    expect(window.location.href).toBe('http://localhost:3000');
  });
});
