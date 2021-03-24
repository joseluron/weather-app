import React from 'react';
import { render, screen } from './test-utils';
import { waitFor } from '@testing-library/react';

import App from '../App';

test('When store is fetched, at least, Barcelona temp, should appear on screen', async () => {
  render(<App />);

  const barcelonaText = await waitFor(() => screen.getByText(/barcelona/i));
  expect(barcelonaText).toBeInTheDocument();
});
