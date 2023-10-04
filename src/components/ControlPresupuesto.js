import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {

    const {clase,estilo} = revisarPresupuesto(presupuesto,restante);
    
    return ( 
        <Fragment>
            
            <div className="progress">
                <div className={clase} role="progressbar" style={estilo} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    ${restante}
                </div>
            </div>
            
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;