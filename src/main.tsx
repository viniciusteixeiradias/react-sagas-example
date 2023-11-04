import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import myFirstReducer from './reducer'

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: myFirstReducer,
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), sagaMiddleware]
  },
});

sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
