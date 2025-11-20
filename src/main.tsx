import React from 'react'
import ReactDOM from 'react-dom/client'
// Importujemy HashRouter - to klucz do działania na GitHub Pages
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Używamy HashRoutera. 
      Sprawia on, że linki wyglądają tak: /#/wschodnia-ekspresja
      Dzięki temu serwer GitHub zawsze wie, jak obsłużyć odświeżenie strony.
      Nie potrzebujemy tu atrybutu 'basename'.
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)