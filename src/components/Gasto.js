import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
   
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {gasto.nombre}
            <span class="badge bg-primary rounded-pill">${gasto.cantidad}</span>
        </li>
  </ul>
    
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;