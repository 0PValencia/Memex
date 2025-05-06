import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DappProvider } from '@coinbase/onchainkit/react'
import { client } from './minikitClient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DappProvider client={client}>
      <App />
    </DappProvider>
  </React.StrictMode>
)
