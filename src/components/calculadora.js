import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {suma} from '../functions/suma'
class Calculadora extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            num1:0,
            num2:0,
            resultado:0
    }
    
    }
    sum(a,b){
        return(a+b)
    }
    rendersuma = ()=>{
        let resultado;
        let num1 = this.state.num1
        let num2 = this.state.num2
        resultado = suma(num1,num2)
        this.setState({resultado:resultado})

        ReactDOM.render(resultado, document.getElementById('resultado'));
    }

    input=(e)=>{
        const campo = e.target.id
        const valor = parseInt(e.target.value)
        this.setState({[campo]:valor})
        
        
    
}

    render(){
        return(
            <div>
            SUMA
            <form>
            
            <input type="text" id="num1"  onChange={(e)=>this.input(e)}/>
             <input type="text" id="num2"  onChange={(e)=>this.input(e)}/>
             <input type="button" value="Enviar" onClick={this.rendersuma}/>
            </form>
            <div id="resultado"></div>    

            </div>
        )
    }
}

export default Calculadora