import React from 'react';
import { withWidth, Typography, Hidden } from '@material-ui/core'

const Oculto = ( props ) => {
    return ( 
        <div>
            <Typography variant='h6' color='primary'>
            Ancho: {props.width}
            </Typography> 
            <Hidden only={['lg', 'md']}>

            </Hidden>
        </div>
     );
}
 
export default withWidth()(Oculto);