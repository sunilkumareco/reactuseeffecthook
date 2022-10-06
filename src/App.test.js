import { render, screen } from '@testing-library/react';
import App from './App';

test('Add to cart', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add to cart/i);
  expect(linkElement).toBeInTheDocument();
});
