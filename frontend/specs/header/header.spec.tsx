import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../pages/components/header/Header';

// Mock child components
jest.mock('./CompanyLogo', () => () => <div>CompanyLogo</div>);
jest.mock('./UserAccount', () => ({ userName }: { userName: string }) => <div>{userName}</div>);
jest.mock('./LogOutButton', () => () => <button>LogOutButton</button>);
jest.mock('@/components/ui/separator', () => ({ orientation }: { orientation: string }) => <div>{orientation} Separator</div>);

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    
    // Check if all mocked child components are rendered
    expect(screen.getByText('CompanyLogo')).toBeInTheDocument();
    expect(screen.getByText('Dulguun Batbaatar')).toBeInTheDocument();
    expect(screen.getByText('vertical Separator')).toBeInTheDocument();
    expect(screen.getByText('LogOutButton')).toBeInTheDocument();
  });

  it('displays the correct user name', () => {
    render(<Header />);
    // Verify the user name is rendered correctly
    expect(screen.getByText('Dulguun Batbaatar')).toBeInTheDocument();
  });

  it('renders the separator with vertical orientation', () => {
    render(<Header />);
    // Check if the separator with 'vertical' orientation is present
    expect(screen.getByText('vertical Separator')).toBeInTheDocument();
  });

  it('renders the logout button', () => {
    render(<Header />);
    // Verify the logout button is present
    expect(screen.getByText('LogOutButton')).toBeInTheDocument();
  });
});
