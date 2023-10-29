import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
const theme = {
  dark: {
    primary: 'rgb(177, 2, 2)',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
