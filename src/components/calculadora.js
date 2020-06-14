import React, {Component} from 'react';

class Calculadora extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1:0,
            num2:0,
            resultado:0
    }
    }

    suma(num1, num2){
        let suma;
        suma = num1 + num2;
        this.state.setState({resultado:suma})
    }

    render(){
        return(
            <div>
            <form>
            <input type="text" id="numero1" />
             <input type="text" id="numero2" />
             <input type="button"/ >
            </form>    

            </div>
        )
    }
}

export default Calculadora