import { render, screen } from '@testing-library/react';
import App from './App';

test('Current Cart Count', () => {
  render(<App />);
  const linkElement = screen.getByText(/Current Cart Count/i);
  expect(linkElement).toBeInTheDocument();
});
