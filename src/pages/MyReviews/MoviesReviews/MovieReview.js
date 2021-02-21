import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TwitterShareButton,
    WhatsappShareButton,

    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    movie_review: {
        padding: theme.spacing(4),
        margin: 20,
    },
    card: {
        padding: theme.spacing(4)
    }
  }));

const MovieReview = ({ review }) => {
    // const { name, } = review;
    const classes = useStyles();
    return (
        <li className={classes.card}>
            <div >
                <img />
                <p> {review} name and Release Movie</p>
                <p>Detalle Movie</p>
                <p>La vi el: </p>
                <p>la vi con: </p>
                <p>Tu puntaje: </p>
            </div>
            <div className="acciones">
                <TwitterShareButton
                    url="https://forocriticas.netlify.app/"
                    title="aqui va el tweet critica"

                >
                    <TwitterIcon
                        size={32}
                        round
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url="Crea tu critica en: https://forocriticas.netlify.app/"
                    title="aqui va el tweet critica"
                    separator="- "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <button
                    type="button"
                    className="btn btn-primario"
                    // onClick={() => clickEditar(critica)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-eliminar"
                    // onClick={() => criticaEliminar(critica._id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default MovieReview;