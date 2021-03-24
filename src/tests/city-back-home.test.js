import React from 'react';
import { render, screen } from './test-utils';
import { waitFor } from '@testing-library/react';

import App from '../App';

test('When store is fetched, you should be able to go to a city page', async () => {
  render(<App />);

  const barcelonaText = await waitFor(() => screen.getByText(/barcelona/i));
  barcelonaText.click();

  const backButton = await waitFor(() => screen.getByTestId(/backButton/i));
  backButton.click();

  const weatherAppTag = await waitFor(() => screen.getByText(/weather app/i));
  expect(weatherAppTag).toBeInTheDocument();
});
