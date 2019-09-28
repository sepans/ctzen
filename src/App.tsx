import React from 'react'

import environment from './config/relayEnvironment'
import { ThemeProvider } from '@smooth-ui/core-sc'
import { theme } from './theme'
import { Normalize } from '@smooth-ui/core-sc'

import { Resolver } from 'found-relay'
import { Router } from './router'

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <Router resolver={new Resolver(environment)} />
    </>
  </ThemeProvider>
)

export default App
