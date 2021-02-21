import React, {useState} from 'react';
import Layout from './components/Layout'
import './styles/_base.scss'
import Router from './router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/ThemeProject'
import Dashboard from './components/Dashboard';
import Login from './pages/Login'

const App = () => {

  const [ loggin, setLoggin ] = useState(false);

  return ( <ThemeProvider theme={ theme }>
    <div className="App">
    {loggin ? <Login/> : <Dashboard/>}
        {/* <Layout> 
          <Router />
        </Layout> */}
    </div>
  </ThemeProvider> );
}
 
export default App;
