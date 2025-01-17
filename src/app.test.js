// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// eslint-disable-next-line no-unused-vars
import App from './App';

test("renders Hello, World! heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();Document
});
