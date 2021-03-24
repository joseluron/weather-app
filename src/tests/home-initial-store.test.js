import React from 'react';
import { render, screen } from './test-utils';

import App from '../App';

test('When store is empty, a loading message should appear', () => {
  render(<App />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
});
