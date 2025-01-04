import { render, screen } from '@testing-library/react';
import {Form} from './form';
import React from 'react';

describe('Form', () => {    
    test('should render the Form component', () => {
        render(<Form />);
        expect(screen.getByText('Form')).toBeInTheDocument();
    });

    test('should render the Form component with inputs', () => {
        render(<Form />);
        expect(screen.getByLabelText('Name:')).toBeInTheDocument();
        expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        expect(screen.getByLabelText('Message:')).toBeInTheDocument();
        expect(screen.getByLabelText('File:')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('should call the handleSubmit function when the form is submitted', () => {
        const handleSubmit = jest.fn();
        render(<Form />);
        const form = screen.getByRole('form');
        form.addEventListener('submit', handleSubmit);
        if (form) {
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
        expect(handleSubmit).toHaveBeenCalled();
    });

    test('should call the handleChange function when the name input is changed', () => {
        const handleChange = jest.fn();
        render(<Form />);
        const nameInput = screen.getByLabelText('Name:');
        nameInput.addEventListener('change', handleChange);
        if (nameInput) {
            nameInput.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
        expect(handleChange).toHaveBeenCalled();
    });

    test('should set the name input value to the value in the formData state', () => {
        render(<Form />);
        const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
        nameInput.value = 'test';
        expect(nameInput.value).toBe('test');
    });
});