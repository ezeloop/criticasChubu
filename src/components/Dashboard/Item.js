import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const Item = ({carpeta}) => {

  

  const useStyles = makeStyles((theme) => ({
    carpeta: {
      color: '#3c1053',
    }}))

    const classes = useStyles();

    return ( 
        <ListItem button>
        <ListItemIcon>
          <FolderIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary={carpeta} className={clsx(classes.carpeta)}/>
      </ListItem>
     );
}
 
export default Item; 