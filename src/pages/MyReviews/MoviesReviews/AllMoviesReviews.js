import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MovieReview from './MovieReview';
import { Container, Link, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display:'grid',
      justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    movie_review: {
        padding: theme.spacing(4),
        margin: 20,
        display:'grid',
      justifyContent: 'center',
    }
  }));

const AllMoviesReviews = () => {
    const reviews = ["mulan", "digimon", "gambito", "pokemon"]
    const classes = useStyles();
    return ( 
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
      
        { reviews.length === 0 ? <p>Aun no has escrito ninguna critica! Qué esperás para escribir la primera?</p> : (
            reviews.map( review => (
                <MovieReview 
                    review={review}
                    className={classes.movie_review}
                />
            ))
        )}

        </Grid>
        <Pagination count={10} color="primary" />
    </Container>
        
      );
}
  
export default AllMoviesReviews; 