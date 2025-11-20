import React from 'react'
import ReactDOM from 'react-dom/client'
// ZMIANA: Importujemy HashRouter zamiast BrowserRouter
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ZMIANA: Używamy HashRouter. 
        Dzięki temu linki będą wyglądać np. tak: /#/wschodnia-ekspresja
        To zapobiega błędom 404 na GitHub Pages przy odświeżaniu.
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)