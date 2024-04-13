import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
