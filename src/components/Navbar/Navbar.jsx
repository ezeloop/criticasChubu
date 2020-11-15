import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import Tooltip from '../../components/Tooltip'

const useStyles = makeStyles( theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
      marginRight: theme.spacing(2) //seria 8px x 2//* 
  },
  title: {
    flexGrow: 2
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return ( 
      <div>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              
              <Typography variant="h4">
                  Fewy's
              </Typography>

              <IconButton color="inherit" aria-label="Cambiar el modo visual" size="medium" className={classes.title}>
                <Typography variant="subtitle1">
                   Home
                </Typography>
              </IconButton>

              <IconButton color="inherit" aria-label="Cambiar el modo visual" size="medium" className={classes.title}>
                <Typography variant="subtitle1">
                    New Review
                </Typography>
              </IconButton>

              <IconButton color="inherit" aria-label="Cambiar el modo visual" size="medium" className={classes.title}>
                <Typography variant="subtitle1">
                    Find Review
                </Typography>
              </IconButton>

              <IconButton color="inherit" aria-label="Cambiar el modo visual" size="medium" className={classes.title}>
              <Typography variant="subtitle1" >
                  My Reviews
              </Typography>
              </IconButton>
              
              <IconButton color="inherit" aria-label="Cambiar el modo visual" size="medium"  >
                <SettingsBrightnessIcon />
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <div className={classes.offset}></div>
      </div>
   );
}
 
export default Navbar;