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

const MainListItems = () => {

  const array = ["2020", "2019"]

  const useStyles = makeStyles((theme) => ({
    carpeta: {
      background: "#d3e0ea",
      color: 'black',
      borderRadius: 20,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        background: "#ffca28",

      }

    },
    texto: {
      color: 'black',
      borderBottom: '1px solid white'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <ListItem button
        className={clsx(classes.carpeta)}
      >
        <ListItemIcon>
          <CreateNewFolderIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Nueva Carpeta" />
      </ListItem>
      <Divider />
      <div >
        <ListSubheader inset className={clsx(classes.texto)} >Mis Carpetas: </ListSubheader>
        <div className={styles.containerFolders}>
          {console.log(array)}
          {/* {array.map( carpeta => { aca quiero recorrer el state de carpetas*/}
          <Item
            carpeta="2021"
          />
          <Item
            carpeta="2020"
          />
          <Item
            carpeta="2019"
          />
          <Item
            carpeta="2018"
          />
          <Item
            carpeta="2018"
          />
          <Item
            carpeta="2018"
          />
          <Item
            carpeta="2018"
          />
          {/* })} */}
        </div>

      </div>
    </div>
  );
}

export default MainListItems;