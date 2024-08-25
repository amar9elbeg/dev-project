import React from 'react';
import {Button} from "../../pages/(common)/components/Button"
import '@testing-library/jest-dom';
import { render , screen , fireEvent } from '@testing-library/react';

describe('Button component', ()=>{

    const mockSetValue = jest.fn();

    it('renders the button with default props',()=>{
        render(<Button text='Click me' value={false} setValue={mockSetValue}/>);

        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).not.toBeDisabled();
    });

    it('renders the button with the "variant"', ()=>{
        render(<Button text='Click me with variant' buttonVariant='outline' value={false} setValue={mockSetValue}/>);

        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toHaveClass('focus-visible:outline-none');
    });

    it('call setValue when clicked and not disable',()=>{
        render(<Button text='Click me' value={false} setValue={mockSetValue} disabled={false} />);

        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(mockSetValue).toHaveBeenCalledWith(true)

    });

    it('disable button when disabled props is true',()=>{
        render(<Button text='Disable' value={false} disabled={true} setValue={mockSetValue}/>);

        const buttonElement = screen.getByText('Disable');
        fireEvent.click(buttonElement);

        expect(buttonElement).toBeDisabled();

    });

    it('does not call setValue when disabled and clicked', () => {
        render(<Button text="Click me" value={false} setValue={mockSetValue} disabled={true} />);
        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(mockSetValue).toHaveBeenCalledWith(false);
      });
    
      it('calls setValue when not disabled and clicked', () => {
        render(<Button text="Click me" value={false} setValue={mockSetValue} disabled={false} />);
        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(mockSetValue).toHaveBeenCalledWith(true); 
      });
    
      it('calls setValue when disabled is undefined', () => {
        render(<Button text="Click me" value={false} setValue={mockSetValue} />);
        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(mockSetValue).toHaveBeenCalled();
      });


})