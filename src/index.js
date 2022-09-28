import React from 'react'
import ReactBreakpoints from 'react-breakpoints'
import ReactDOM from 'react-dom/client'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import theme from './config/theme'
import { App } from './App'

const breakpoints = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const app = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ReactBreakpoints breakpoints={breakpoints}>
      <App />
    </ReactBreakpoints>
  </MuiThemeProvider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
