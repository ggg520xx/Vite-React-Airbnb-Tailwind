import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './assets/styles/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

  // 暫時關閉嚴格模式 減少次數
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
