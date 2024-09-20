import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubHeader } from '../../pages/(classhome)/components/SubHeader'

describe('SubHeader', () => {
    it('renders with correct header and number for "student"', () => {
      render(<SubHeader header="student" numberOfItemForEachSection={10} />);
  
      expect(screen.getByText('сурагч')).toBeInTheDocument();
      expect(screen.getByText('Нийт сурагч : 10')).toBeInTheDocument();
  
      const userIcon = screen.getByTestId('lucide-user');
      expect(userIcon).toBeInTheDocument();
    });
    it('renders with default values when unknown header is passed', () => {
        render(<SubHeader header="unknown" numberOfItemForEachSection={3} />);
    
        expect(screen.getByText('сурагч')).toBeInTheDocument();
        expect(screen.getByText('Нийт сурагч : 3')).toBeInTheDocument();
    
        const bookmarkIcon = screen.getByTestId('lucide-bookmark');
        expect(bookmarkIcon).toBeInTheDocument();
      });})