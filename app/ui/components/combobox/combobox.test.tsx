import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Combobox} from './combobox';

describe('Combobox component', () => {
    const options = [
        { id: '1', name: 'Option 1', email: 'test1@example.com', image_url: 'http://example.com/test1.jpg' },
        { id: '2', name: 'Option 2', email: 'test2@example.com', image_url: 'http://example.com/test2.jpg' },
        { id: '3', name: 'Option 3', email: 'test3@example.com', image_url: 'http://example.com/test3.jpg' }
    ];
    
    it('renders correctly with label', () => {
        render(<Combobox options={[]} label="test" comboId="test" onChange={() => {}} />);
        expect(screen.getByText('test:')).toBeInTheDocument();
    });

    it('sets selectValue to "select a customer" by default', () => {
        render(<Combobox options={[]} label="test" comboId="test" onChange={() => {}} />);
        expect(screen.getByText('select a customer')).toBeInTheDocument();
    });

    test("updates selected value and calls onChange when an option is clicked", () => {
        const mockOnChange = jest.fn();
        render(<Combobox options={options} label="test" comboId="test" onChange={mockOnChange} />);
      
        // Initially, no option is selected
        const selectedValue = screen.getByTestId("option-selected-value");
        expect(selectedValue).toHaveTextContent("select a customer"); 
      
        // Open the combobox
        const combobox = screen.getByRole("combobox");
        fireEvent.click(combobox);
      
        // Ensure the dropdown is open
        const listbox = screen.getByRole("listbox");
        expect(listbox).toBeVisible();
      
        // Select the second option
        const option = screen.getAllByRole("option", { name: "Option 2" })[0];
        fireEvent.click(option);
      
        // Assert the value is updated and onChange is called
        expect(selectedValue).toHaveTextContent("Option 2");
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith("Option 2");
      
        // Ensure the dropdown is closed
        expect(listbox).not.toHaveClass('open');
      });
})
