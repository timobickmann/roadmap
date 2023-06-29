import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <div className="min-h-screen bg-gray-700 pb-1 font-mono text-gray-300">
    <App />
    </div>
  </React.StrictMode>,
)
