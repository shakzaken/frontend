import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const number = 5+3*10;

  expect(number).toBe(35);
});
