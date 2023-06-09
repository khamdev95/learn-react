import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ThemeProvider} from './ThemeContext'
import {StoreProvider} from './store'
import router from './router';
import { RouterProvider } from 'react-router-dom';
import HomePage from './views/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StoreProvider>
        <HomePage />
      </StoreProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
