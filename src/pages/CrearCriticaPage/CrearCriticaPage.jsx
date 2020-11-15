import React from 'react';
import styles from './CrearCriticaPage.module.scss'
import Formulario from '../../components/Formulario'
import { Typography } from '@material-ui/core';



const CrearCriticaPage = () => {
    return ( 
        <div className={styles.crearCriticaPage}>
            <Typography variant='h1' align='center' color='primary'>Crear Critica</Typography>
            
            <Formulario />
        </div> 
    );
}
 
export default CrearCriticaPage;