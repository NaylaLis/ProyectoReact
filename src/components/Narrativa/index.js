import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';





export default class Narrativa extends Component{

    constructor(props) {
        super(props);
        this.state = {
         narrativa: []   
        }
    }
    


componentDidMount(){
        let arreglo = this.state.narrativa;
        arreglo.push(this.props.historia)
        this.setState({ narrativa : arreglo})
     }
 
componentWillReceiveProps(nextprops){
   let arreglo = this.state.narrativa;
   arreglo.push(nextprops.historia)
   this.setState({ narrativa : arreglo})
   console.log(this.state.narrativa);
}


render(){
   
    console.log(this.props.historia)
    return(
        <>     
          {this.state.narrativa.map(element =><p key={uuidv4()} className='historia'>{element}</p>)}       
        </>
        )
    
}
}
