import React, { Component } from "react";
import Botones from "../Botones";
import Data from "../data.json";
import Narrativa from "../Narrativa";
import Swal from 'sweetalert2'
import Recordatorio from "../Recordatorio";

export default class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      
            contador: 1,
            seleccion:""
        }
    }

componentDidMount(){
        Swal.fire(
            '¿Estas listx para eescribir tu propia historia!?',
            '(:',
            'warning'
          )
      }
    
handleData = (opcion) => {
            if (this.state.contador >= 5){
                Swal.fire({
                    title: 'THE END',
                    text: 'Esta historia ha llegado a su fin',
                    imageUrl: 'https://i.gifer.com/origin/9c/9c5cb7d4944aeb26628090c473fc800f_w200.webp',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
            else{
                this.setState({contador : this.state.contador +1 , seleccion : opcion})
            }
        }
              
handleObjeto = () =>{
        if(this.state.contador === 1){
           return Data[0]
        } else 
        {  let id = this.state.contador + this.state.seleccion;
            return Data.find(element=> element.id === id)
        }
        
     }            
        
render(){    
       
        
        
    return(
        <>
        <Narrativa historia={this.handleObjeto().historia}  />
        <Botones  update={this.handleData} opciones={this.handleObjeto().opciones}/>   
        <Recordatorio opciones={this.state.seleccion}/>   
        </>
    );
    }
}
 




 