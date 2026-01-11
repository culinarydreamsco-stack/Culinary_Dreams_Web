import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import { RemindProvider } from './RemindContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    
    <RemindProvider>
        <App />
    </RemindProvider>
    </BrowserRouter>
  </React.StrictMode>
)