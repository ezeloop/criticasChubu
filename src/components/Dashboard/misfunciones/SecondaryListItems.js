import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styles from '../Dashboard.module.scss'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import FolderIcon from '@material-ui/icons/Folder';
import Item from '../Item';


const SecondaryListItems = () => { 

  const useStyles = makeStyles((theme) => ({
    carpeta: {
      background: "#3c1053",
      color: 'black',
      transition: 'all 0.2s',
      '&:hover': {
        background: `white`,
      
     }
     
    },
    header: {
      borderBottom: '1px solid white',
      color: 'black',
    },
    texto: {
      color: 'white'
    }
  }));

  const classes = useStyles();


    return ( 
        <div>
    <ListSubheader inset className={clsx(classes.header)}>Mis Funciones: </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="secondary"/>
      </ListItemIcon>
      <ListItemText style={{ color: '#3c1053'}} primary="Buscar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="secondary"/>
      </ListItemIcon>
      <ListItemText style={{ color: '#3c1053'}} primary="Explorar Críticas" />
    </ListItem>
  
  </div>
     );
}
 
export default SecondaryListItems;