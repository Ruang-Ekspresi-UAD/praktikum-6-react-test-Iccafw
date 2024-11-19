import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
  test('Counter default value must be 0', () => {
    render(<Counter />);
    const displayValue = screen.getByTestId('display-value');
    expect(displayValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const displayValue = screen.getByTestId('display-value');
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(displayValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const displayValue = screen.getByTestId('display-value');
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    expect(displayValue).toHaveTextContent('-1');
  });

  test('Display has correct value', () => {
    render(<Counter />);
    const displayValue = screen.getByTestId('display-value');
    expect(displayValue).toBeInTheDocument();
    expect(displayValue).toHaveTextContent('0');
  });
});
