import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import weatherInformation from '../redux/reducers/Weather';

function render(
  ui,
  {
    initialState,
    store = createStore(combineReducers({
      weatherInformation
      // Use this line only if you want the logger in tests
      // }), applyMiddleware(thunk, createLogger({}))),
    }), applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }