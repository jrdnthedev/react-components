import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Select} from './select';

describe('Select component', () => {
    const options = [
        { id: '1', name: 'Option 1', email: 'test1@example.com', image_url: 'http://example.com/test1.jpg' },
        { id: '2', name: 'Option 2', email: 'test2@example.com', image_url: 'http://example.com/test2.jpg' },
        { id: '3', name: 'Option 3', email: 'test3@example.com', image_url: 'http://example.com/test3.jpg' }
    ];

    it('renders correctly with label', () => {
        render(<Select options={[]} label="test" onChange={() => {}} />);
        expect(screen.getByText('test:')).toBeInTheDocument();
    });

    it('triggers onChange when value is selected', () => {
        const handleChange = jest.fn();
        render(<Select options={[]} label="test" onChange={handleChange} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders options correctly', () => {
        render(<Select options={options} label="test" onChange={() => {}} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('renders selected value', () => {
        render(<Select options={[]} label="test" onChange={() => {}} />);
        expect(screen.getByText('Selected: no value selected')).toBeInTheDocument();
    });

    it("updates state and calls onChange when a new option is selected", () => {
        const mockOnChange = jest.fn();
        render(<Select options={options} label="Test Label" onChange={mockOnChange} />);
      
        // Assert initial state
        const selectElement = screen.getByTestId("select");
        const selectedValueElement = screen.getByTestId("selected-value");
      
        expect(selectedValueElement.textContent).toBe("Selected: no value selected");
      
        // Simulate selecting a new option
        fireEvent.change(selectElement, { target: { value: "Option 1" } });
      
        // Assert state and callback
        expect(selectedValueElement.textContent).toBe("Selected: Option 1");
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith("Option 1");
      
        // Simulate selecting another option
        fireEvent.change(selectElement, { target: { value: "Option 2" } });
      
        // Assert state and callback again
        expect(selectedValueElement.textContent).toBe("Selected: Option 2");
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenCalledWith("Option 2");
    });
});