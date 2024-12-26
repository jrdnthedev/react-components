import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Select} from './select';
import { Customer } from '@/app/lib/types';
import { mock } from 'node:test';

describe('Select component', () => {

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
});