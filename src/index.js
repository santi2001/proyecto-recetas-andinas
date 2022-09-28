import React from 'react'
import ReactDOM from 'react-dom/client'
import { MuiThemeProvider } from '@material-ui/core'

import theme from './config/theme'
import { App } from './App'

const configApp = (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(configApp)
