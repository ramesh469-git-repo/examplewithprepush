// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
// eslint-disable-next-line no-unused-vars
import App from './App'; 
const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement); 
root.render(<App />);