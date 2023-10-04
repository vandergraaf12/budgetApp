import React from 'react';
import PropTypes from 'prop-types';

const Error = ( {mensaje} ) => ( 
    
    <ul class="list-group mb-3">
        <li class="list-group-item list-group-item-yellow">{mensaje}</li>        
    </ul>    

);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;