import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ListIcon from '@material-ui/icons/List';
import PageviewIcon from '@material-ui/icons/Pageview'
import RateReviewIcon from '@material-ui/icons/RateReview';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Home" aria-label="add">
      <Fab color="secondary" className={classes.fab}>
          <HomeIcon />
          </Fab>
      </Tooltip>
      <Tooltip title="Add Review" aria-label="add">
        <Fab color="secondary" className={classes.fab}>
          <RateReviewIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Find Review" aria-label="add">
        <Fab color="secondary" className={classes.fab}>
        <PageviewIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Read the Reviews" aria-label="add">
        <Fab color="secondary" className={classes.fab}>
        <ListIcon />
        </Fab>
      </Tooltip>
      

      
    </div>
  );
}
