import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class Botones extends Component {
    constructor(props) {
        super(props);
        this.state = {
           a: "",
           b:""
    }
    }

    handleClick = (evento) => {
        const { value } = evento.target;
        this.props.update(value);
        
}

componentDidMount(){
  const {a,b} = this.props.opciones
    this.setState({ a : a, b : b})
}

componentWillReceiveProps(nextprops){
    const {a,b} = nextprops.opciones
    this.setState({ a : a, b : b})

 }

    render() {
        return (
            <>
                
                <input key={uuidv4()}  type="button" onClick={this.handleClick} value="a" className="botones"/>
                <p key={uuidv4()}  className='opcion'>{this.state.a}</p>

                <input key={uuidv4()} type="button"   onClick={this.handleClick} value="b" className="botones" />
                <p key={uuidv4()}  className='opcion'>{this.state.b}</p>
            </>
        )
    }


}


