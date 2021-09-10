import React , {Component } from 'react';
import { v1 as uuidv1 } from 'uuid';


export default class Recordatorio extends Component {
    constructor(props) {
        super(props);
        this.state = {
           seleccionAnterior: "",
           listaSelecciones: []    }
    }
    
    


   componentWillReceiveProps(nextprops){

       let seleccion = nextprops.opciones
        let selecciones = this.state.listaSelecciones
        selecciones.push(seleccion)
        console.log(seleccion);
        console.log(selecciones);
        this.setState({seleccionAnterior : seleccion, listaSelecciones : selecciones  })
    }
    
 

render(){
    
    return(
        <div className="recordatorio">
            <p>Tu selección previa fué : {this.state.seleccionAnterior}</p>
            <p>Camino de opciones recorridas :</p>
        <ul>{this.state.listaSelecciones.map(element=><li key={uuidv1()}>{element}</li>)}</ul>
        </div>
        
    )


    }}