import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import "bootstrap-icons/font/bootstrap-icons.css";//for icons
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import Store from './Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={Store}>
    <App />
</Provider>
);
