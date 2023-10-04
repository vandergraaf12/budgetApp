import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => (
    <div className="card bg-light2 border-0">           
        <div className="card-header bg-blue-100 text-white">
            <h5 className="card-title">Lista</h5>
        </div>
        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))
        }
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;