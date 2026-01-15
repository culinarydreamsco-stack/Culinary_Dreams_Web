import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import { RemindProvider } from './RemindContext.jsx'
import { InventoryProvider } from './InventoryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <InventoryProvider>
    
    <RemindProvider>
        <App />
    </RemindProvider>
    </InventoryProvider>
    </BrowserRouter>
  </React.StrictMode>
)