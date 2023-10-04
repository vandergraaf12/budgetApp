import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto'; 
function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);
 
  useEffect(() => {
      if(crearGasto) {
          guardarGastos([
            ...gastos,
            gasto
          ]);

          const presupuestoRestante = restante - gasto.cantidad;
          guardarRestante(presupuestoRestante);
      }

      guardarCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container-fluid">      
          <div className="row bg-blue-800 mb-5 ">            
                <div className="col">                
                    <nav className="navbar ">
                      <div className="container-fluid">
                        <a className="text-white text-uppercase font-weight-bold navbar-brand" href="#">
                          <img src="../budget.png" alt="" width="30" height="24" className="d-inline-block align-top white"/>
                          Presupuesto
                        </a>
                      </div>
                    </nav>                    
                </div>
            </div>
            
                { mostrarpregunta ? (
                    <div className="row  justify-content-md-center">  
                        <Pregunta 
                            guardarPresupuesto={guardarPresupuesto}
                            guardarRestante={guardarRestante}
                            actualizarPregunta={actualizarPregunta}
                        />
                    </div>
                  ) : (
                    <div className="row justify-content-md-center">            
                      <div className="col col-lg-5">                
                        <Formulario 
                          guardarGasto={guardarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                        />         
                      </div>
                      <div className="col col-lg-5">                
                          <Listado 
                            gastos={gastos}
                          />      
                           <ControlPresupuesto 
                              presupuesto={presupuesto}
                              restante={restante}
                          />
                      </div>
                    </div>
                  )
                }
                
            

      
    </div>
  );
}

export default App;
