import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from '../Dashboard.module.scss'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
// import FolderIcon from '@material-ui/icons/Folder';
import Item from '../Item';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MovieIcon from '@material-ui/icons/Movie';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { useSelector } from 'react-redux'

const MainListItems = () => {

  const array = ["2020", "2019"]

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
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

  const reviews = useSelector((state) => state.movieReviews.reviews);

  console.log(reviews)

  return (

    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> <MovieIcon color="primary" style={{ marginRight: 10 }} /> Críticas de películas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ListItem button
              className={clsx(classes.carpeta)}
            >
              <ListItemIcon>
                <CreateNewFolderIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Nueva Carpeta" />
            </ListItem>

            <div >
              <ListSubheader inset className={clsx(classes.texto)} >Mis Carpetas: </ListSubheader>
              <div className={styles.containerFolders}>

                {array.map(carpeta => (
                  <Item
                    carpeta={carpeta}
                  />
                ))}

              </div>

            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> <MovieFilterIcon color="primary" style={{ marginRight: 10 }} /> Críticas de Series</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ListItem button
              className={clsx(classes.carpeta)}
            >
              <ListItemIcon>
                <CreateNewFolderIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Nueva Carpeta" />
            </ListItem>

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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> <MenuBookIcon color="primary" style={{ marginRight: 10 }} />  Críticas de Libros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ListItem button
              className={clsx(classes.carpeta)}
            >
              <ListItemIcon>
                <CreateNewFolderIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Nueva Carpeta" />
            </ListItem>

            <Typography className={classes.heading}>Ninguna carpeta</Typography>

            {/* <div >
              <ListSubheader inset className={clsx(classes.texto)} >Mis Carpetas: </ListSubheader>
              <div className={styles.containerFolders}>
                {console.log(array)} */}
            {/* {array.map( carpeta => { aca quiero recorrer el state de carpetas*/}
            {/* <Item
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
                /> */}
            {/* })} */}
            {/* </div>

            </div> */}
          </div>
        </AccordionDetails>
      </Accordion>



    </div>



  );
}

export default MainListItems;