import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText , Divider} from '@material-ui/core'
import ListIcon from '@material-ui/icons/List';
import PageviewIcon from '@material-ui/icons/Pageview'
import RateReviewIcon from '@material-ui/icons/RateReview';
import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {
    
    return ( 
        <div>
            <List component='nav' >
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <RateReviewIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary='New Review' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <PageviewIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary='Find Review' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ListIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary='My Reviews' />
                </ListItem>

                <Divider />

            </List>
        </div>
     );
}
 
export default Sidebar;