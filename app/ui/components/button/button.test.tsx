import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from './button';

describe('Button component', () => {
    
  it('renders correctly with label', () => {
    render(<Button onClick={() => {}} children="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} children="Click me" />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
