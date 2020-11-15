import React from 'react';
import styles from './HomePage.module.scss'
import Tooltip from '../../components/Tooltip'
import { Typography } from '@material-ui/core';


const HomePage = () => {
    return (
        <div className={styles.home}> 
            <Typography variant='h1' align='center' color='primary'>Home</Typography>
            <Typography variant='subtitle1' align='center' color='primary'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia, lacus sociosqu purus tincidunt elementum auctor risus arcu, eget tellus eros habitant placerat platea magnis. Morbi eros proin hendrerit tristique ultricies litora malesuada, leo quis donec odio turpis per potenti pretium, tempor interdum vestibulum fringilla vitae quisque. Tristique quisque duis tellus et ullamcorper ut, arcu aptent torquent augue nibh pulvinar, eros cubilia leo dictumst tincidunt.

Elementum nunc ante aliquet sollicitudin litora, duis fusce praesent vitae per, sagittis euismod ad sem. Netus phasellus fames ut et eu libero mauris, commodo pharetra gravida convallis nec habitant, litora posuere ridiculus aliquam laoreet augue. Porta turpis augue sodales curae habitant inceptos sagittis facilisi placerat eleifend lectus, orci netus et nibh fames cras interdum himenaeos platea tellus.</Typography>
            
        </div>
     );
}
 
export default HomePage;