import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderEachClass } from '../../pages/(common)/components/HeaderEachClass';


describe('HeaderEachClass Common Component', () => {
  it('renders the components and icons', () => {
    render(<HeaderEachClass name='test'/>);
    const headerSpan = screen.getByText('test'); 
    expect(headerSpan).toBeInTheDocument();


  });
});
