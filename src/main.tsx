import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    {/* POPRAWKA: Dodajemy `basename` pasujący DOKŁADNIE 
      do wartości 'base' z pliku vite.config.ts 
    */}
    <BrowserRouter basename="/Nowa-Ekspresja/">
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)