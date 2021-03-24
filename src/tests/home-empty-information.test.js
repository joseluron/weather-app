import React from 'react';
import { render, screen } from './test-utils';
import { waitFor } from '@testing-library/react';

import App from '../App';
import { eraseWeatherInformation } from '../redux/actions/Weather';

test('When weatherInformation is empty, a message should be shown to the user', async () => {
  render(<App />);

  () => dispatch => dispatch(eraseWeatherInformation);
  
  const noWeatherText = await waitFor(() => screen.getByText(/no weather information/i));
  
  expect(noWeatherText).toBeInTheDocument();
});
