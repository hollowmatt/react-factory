import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import '../node_modules/todomvc-app-css/index.css';
import '../node_modules/todomvc-common/base.css';

import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
