import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { UserAccount } from '../../pages/(common)/components/UserAccount';
import '@testing-library/jest-dom';

describe('UserAccount Common Component', () => {
    const avatarPicUrl = 'https://picsum.photos/200';
    const userName = 'Dulguun Batbaatar';
  
    it('renders the user avatar image with correct src and alt attributes', () => {
      render(<UserAccount avatarPicUrl='https://picsum.photos/200' userName={userName} />);
      
      const avatarImage = screen.getByRole('img');
    // const avatarImage = screen.queryByAltText('avatar');
    // const avatarImage = screen.getByAltText('avatar');
      expect(avatarImage).toBeInTheDocument();
      expect(avatarImage).toHaveAttribute('src', avatarPicUrl);
      expect(avatarImage).toHaveAttribute('alt', 'avatar');
    });
  
    it('renders fallback avatar when avatarPicUrl is empty', () => {
      render(<UserAccount avatarPicUrl="" userName={userName} />);
      
      const avatarFallback = screen.getByText(userName[0]);
      expect(avatarFallback).toBeInTheDocument();
    });
  
    it('renders the user name correctly', () => {
      render(<UserAccount avatarPicUrl={avatarPicUrl} userName={userName} />);
      
      const displayedUserName = screen.getByText(userName);
      expect(displayedUserName).toBeInTheDocument();
    });
  });