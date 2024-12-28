import { render, screen } from '@testing-library/react';
import {Form} from './form';
import React from 'react';

describe('Form', () => {    
    it('should render the Form component', () => {
        render(<Form />);
        expect(screen.getByText('Form')).toBeInTheDocument();
    });
});