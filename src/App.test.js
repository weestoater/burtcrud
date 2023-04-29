import { render, screen } from '@testing-library/react';
import App from './App';

test('renders burtcrud in the page', () => {
  render(<App />);
  const textElement = screen.getByText(/burtcrud/i);
  expect(textElement).toBeInTheDocument();
});


test('renders an input field called first name', () => {
  render(<App />);
  const textElement = screen.getByText(/first name/i);
  expect(textElement).toBeInTheDocument();
});
