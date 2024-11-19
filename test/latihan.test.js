import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('Default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Multiple increments work correctly', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('3');
  });
  
  test('Multiple decrements work correctly', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-2');
  });
  
  test('Reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const counterValue = screen.getByTestId('counter-value');
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
  test('Displays greeting with my name', () => {
    const myName = 'Icca Firstika Wibowo';
    render(<Greeting name={myName} />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent(`Hello, ${myName}`);
  });

  test('Displays greeting with my lecturer\'s name', () => {
    const lecturerName = 'Sri Handayaningsih';
    render(<Greeting name={lecturerName} />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent(`Hello, ${lecturerName}`);
  });
});

describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    const alertMessage = 'This is a test alert';
    window.alert = jest.fn(); // Mock the alert function
    render(<AlertButton message={alertMessage} />);
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith(alertMessage);
  });

  test('Does not trigger alert when message is empty', () => {
    const alertMessage = '';
    window.alert = jest.fn(); // Mock the alert function
    render(<AlertButton message={alertMessage} />);
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith(alertMessage);
  });
});
