import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ( { guardarGasto, guardarCrearGasto } ) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        
        e.preventDefault();        
        
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        guardarGasto(gasto);  
        guardarCrearGasto(true);
        guardarNombre('');
        guardarCantidad(0);

    }

    return ( 
        <form onSubmit={agregarGasto}>
            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto." /> : null}    
            <div className="card">           
                <div class="card-header bg-red text-white">
                    <h5 class="card-title">Agrega Tus Gastos Aquí</h5>
                </div>
                <div className="card-body">                    
                    <div className="mb-3 form-group ">
                        <label>Nombre Gasto</label>
                        <input
                            type="text"
                            placeholder="Ej. Transporte"
                            className="form-control"
                            value={nombre}
                            onChange={e => guardarNombre(e.target.value)}
                            />
                    </div>
                    <div className="mb-3 form-group">
                        <label>Cantidad Gasto</label>
                        <input
                            type="number"
                            placeholder="Coloca tu presupuesto"
                            className="form-control"
                            value={cantidad}
                            onChange={e => guardarCantidad(e.target.value)}
                            />
                    </div>
                    <div className="mb-3 form-group">
                        <input 
                                type="submit"
                                className="btn btn-primary form-control"
                                value="Agregar Gasto"
                            />
                    </div>
                </div>
            </div>  
        </form>              
        
              
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;
