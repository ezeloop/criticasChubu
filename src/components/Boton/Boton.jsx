import React from 'react';
import { Button } from '@material-ui/core'


const Boton = ({ name, size, icon }) => {
    return ( 
        //variant outlined es transparente y por fuera un borde
        <Button variant="contained" color="pepe" size={ size } endIcon={ icon }>
          { name }
        </Button>
     );
}
 
export default Boton;