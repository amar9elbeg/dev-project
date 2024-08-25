import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../../pages/(common)/components/Header';


describe('Header Common Component', () => {
  it('renders the components and icons', () => {
    render(<Header />);
    const logoElement = screen.getByRole('img'); 
    expect(logoElement).toBeInTheDocument();

    const links = screen.getAllByRole('link')
    // console.log(links);
    
    expect(links.length).toBe(2)
  });
});
