import React from 'react';
import Layout from './components/Layout'
import './styles/_base.scss'
import Router from './router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/ThemeProject'


const App = () => (
  
<ThemeProvider theme={ theme }>
  <div className="App">
      <Layout> 
        <Router />
      </Layout>
  </div>
</ThemeProvider>
)

export default App;
