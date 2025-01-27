// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line no-unused-vars
import App from './App'; 
const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement); 
root.render(<App />);