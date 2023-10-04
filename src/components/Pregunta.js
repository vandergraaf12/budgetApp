import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ( { guardarPresupuesto, guardarRestante, actualizarPregunta } ) => {

    const[cantidad, guardarCantidad] = useState(0);
    const[error, guardarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) );
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            
                <div className="col-12 text-center"><h2 className="mb-3">Coloca tu Presupuesto</h2></div>                
                <div className="col col-lg-4">
                    { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
                    <form onSubmit={agregarPresupuesto} >
                        <div className="mb-3">
                            <input
                                type="number"
                                placeholder="Coloca tu presupuesto"
                                className="form-control"
                                onChange={definirPresupuesto}
                                />
                        </div>
                        <div className="mb-3">
                            <input 
                                    type="submit"
                                    className="btn btn-green form-control"
                                    value="Definir presupuesto"
                                />
                        </div>
                    </form>
                </div>
                     
            
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;