import React, { useState } from 'react';

const FormMovieReview = () => {

    const [review, setReview] = useState({
        poster: '',
        name: '',
        overview: '',
        mythought: '',
        dayseen: '',
        spectators: '',
        rating: '',
        releaseyear: '',
        genre: ''
    })

    const [isNotNumber, setIsNotNumber] = useState(false)

    const handleChange = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // if (criticaseleccionada) {
        //     alert("toque editar")
        //     console.log(criticaseleccionada)
        //     alert("siguiendo")
        // }


        // validar
        if ( name.trim() === '' || mythought.trim() === '' || dayseen.trim() === '' || spectators.trim() === '' || rating.trim() === '' || dayseen.trim() === '') {
            // validarCritica();
            alert('Todos los campos deben ser llenados')
            return;
        }
        if (isNaN(rating)) {
            setIsNotNumber(true);
            return;
        }

        // Si es edición o si es nueva critica
        //if (criticaseleccionada === null) {

            // agregar la nueva critica al state de criticas
           // critica.proyecto = proyectoActual._id;

            // agregarCritica(critica);
         //   dispatch(agregarCriticaAction(critica))

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su crítica ha sido creada con éxito',
                showConfirmButton: false,
                timer: 1500
            })

            //console.log(critica)


        //  else {

            // actualizar critica existente
            // actualizarCritica(critica);
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Su crítica ha sido actualizada con éxito',
            //     showConfirmButton: false,
            //     timer: 1500
            // })



            // Elimina criticaseleccionada del state
            // limpiarCritica();
        
        // Obtener y filtrar las criticas del proyecto actual
        // obtenerCriticas(proyectoActual.id);

        //llamo al action para guardar el tipo de consulta
        // guardarTipoConsulta(tipo, nombre)


        // reiniciar el form
        guardarCritica({
            poster: '',
            name: '',
            overview: '',
            mythought: '',
            dayseen: '',
            spectators: '',
            rating: '',
            releaseyear: '',
            genre: ''
        })
    }


    //http://api.tvmaze.com/search/shows?q=gambito 



    return ( 
        <div>
            <div className="formulario">
                    { isNotANumber ? <p className="mensaje error">El puntaje debe ser en numeros!</p> : null}
                    <form
                        onSubmit={onSubmit}

                    >
                        {/* <FormControl className={classNameSelect} onSubmit={onSubmit}>
                        <InputLabel className={classes.select} id="demo-simple-select-autowidth-label">Película o Serie</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tipo}
                            onChange={handleChange}
                            className={classNameSelect}
                            placeholder="pelicula o serie?"
                            name="tipo"
                            displayEmpty="true"
                            defaultValue="" 
                            
                        >
                            <MenuItem name="tipo" value="pelicula">Película</MenuItem>
                            <MenuItem name="tipo" value="serie">Serie</MenuItem>
                        </Select>
                        </FormControl> */}


                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="nombre" value={name} onChange={handleChange} required />
                            <label for="name" class="form__label">Nombre de la película o serie </label>
                        </div>

                        <div class="form__group field">
                            <textarea type="input" class="form__field" placeholder="Name" name="detalle" value={mythought} onChange={handleChange} required />
                            <label for="name" class="form__label">¿Qué te pareció?</label>
                        </div>

                        <div class="form__group field">
                            <input type="date" class="form__field" placeholder="Name" value={dayseen} name="fechaEnVerla" onChange={handleChange} required />
                            <label for="name" class="form__label">¿Cuando la viste?</label>
                        </div>

                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" value={spectators} name="espectadores" onChange={handleChange} required />
                            <label for="name" class="form__label">¿En compañía o solo?</label>
                        </div>

                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" value={rating} name="calificacion" onChange={handleChange} required />
                            <label for="name" class="form__label">¿Que puntuación le ponés?</label>
                        </div>

                        <div className="contenedor-input">


                            <input
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                value="Agregar Critica"
                                // value={criticaseleccionada ? 'Editar Crítica' : 'Agregar crítica'}
                            />
                        </div>
                    </form>



                    {errorcritica ? <p className="mensaje error">Todos los valores son necesarios </p> : null}


        </div>
     );
}

export default FormMovieReview;