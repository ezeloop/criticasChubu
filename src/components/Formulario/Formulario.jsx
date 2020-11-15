import React,{useState} from 'react';
import styles from './Formulario.module.scss'
import Button from '../Boton'
import SendIcon from '@material-ui/icons/Send';

 const Formulario = () => {

    const [datos, guardarDatos] = useState({
        titulo: '',
        texto: '',
        compañia:'',
        añoTitulo:'',
        mesAñoVisto:'',
        calificacion:''
    })

    const handleChange = () => {

    }

     return ( 
         <form className={styles.formulario} action="/" method="post">
            <Button name='Enviar' size='large' icon={<SendIcon />}/>
             <input 
                className={styles.input}
                type="text"
                name="titulo"
                placeholder="Titulo a criticar"
                onChange={handleChange}
                /*value={titulo}*/
             />
             
         </form>
      );
 }
  
 export default Formulario;