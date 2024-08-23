import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import ClassTabs from '../../pages/components/class/ClassTabs'; // Adjust the import path as needed

describe('ClassTabs Component', () => {
  it('renders the tabs correctly', () => {
    render(<ClassTabs />);

    // Check if the tabs are rendered
    expect(screen.getByText('Бүгд')).toBeInTheDocument();
    expect(screen.getByText('Coding')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();

    // Check if separators are rendered
    expect(screen.getAllByRole('separator')).toHaveLength(2); // There are two separators
  });

  it('activates the correct tab when clicked', () => {
    render(<ClassTabs />);

    // Click on the "Coding" tab
    fireEvent.click(screen.getByText('Coding'));

    // Check if the "Coding" tab is active
    expect(screen.getByText('Coding')).toHaveClass('active'); // Replace 'active' with the actual class if necessary
  });
});
