export const revisarPresupuesto = (presupuesto, restante) => {
    let porcentaje = (restante*100) / presupuesto
    let clase = {
            mainclass: 'progress-bar',
            color:'',
            clase: '',
            estilo:{}
    }

    if( (presupuesto / 4) > restante ) {
        clase.color = 'bg-red'
    }else if( (presupuesto / 2) > restante ){
        clase.color = 'bg-orange'
    }else {
        clase.color = 'bg-green'
    }

    clase.clase = clase.mainclass+' '+clase.color;
    clase.estilo = {
        width: porcentaje+'%'
    }
    return clase;
};

