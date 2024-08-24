// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import UserAccount from '../../pages/components/header/UserAccount';

// // Mock the Avatar components
// jest.mock('@/components/ui/avatar', () => ({
//   Avatar: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   AvatarImage: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
//   AvatarFallback: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
// }));

// describe('UserAccount Component', () => {
//   it('renders without crashing', () => {
//     render(<UserAccount avatarPicUrl="http://example.com/avatar.jpg" userName="Dulguun Batbaatar" />);
    
//     // Check if the avatar image and user name are rendered
//     expect(screen.getByRole('img')).toHaveAttribute('src', 'http://example.com/avatar.jpg');
//     expect(screen.getByText('Dulguun Batbaatar')).toBeInTheDocument();
//   });

//   it('displays the avatar image', () => {
//     render(<UserAccount avatarPicUrl="http://example.com/avatar.jpg" userName="Dulguun Batbaatar" />);
    
//     // Verify the avatar image src
//     expect(screen.getByRole('img')).toHaveAttribute('src', 'http://example.com/avatar.jpg');
//   });

//   it('shows the fallback when avatarPicUrl is not provided', () => {
//     render(<UserAccount avatarPicUrl="" userName="Dulguun Batbaatar" />);
    
//     // Ensure the fallback is displayed
//     expect(screen.getByText('D')).toBeInTheDocument();
//   });

//   it('displays the correct user name', () => {
//     render(<UserAccount avatarPicUrl="http://example.com/avatar.jpg" userName="Dulguun Batbaatar" />);
    
//     // Verify the user name is rendered
//     expect(screen.getByText('Dulguun Batbaatar')).toBeInTheDocument();
//   });
// });
