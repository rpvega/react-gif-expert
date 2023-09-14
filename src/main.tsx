import React from 'react'
import ReactDOM from 'react-dom/client'
import {GiftExpertApp as  App}  from './GifExpertApp.tsx'
import './assets/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
