import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import App from './App'

import './index.css'

const store = configureStore()

/* ——— Provider wraps the entire app and passes the store as props down to all children ——— */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
