import React, {Component} from 'react';
import ReactDOM from 'react-dom'
class Calculadora extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            num1:0,
            num2:0,
            resultado:0
    }
    
    }

    suma = ()=>{
        let suma;
        let num1 = this.state.num1
        let num2 = this.state.num2
        suma = num1 + num2;
        this.setState({resultado:suma})
        console.log(this.state)
        console.log('hola')
        ReactDOM.render(suma, document.getElementById('resultado'));
    }

    input=(e)=>{
        const campo = e.target.id
        const valor = parseInt(e.target.value)
        this.setState({[campo]:valor})
        console.log(this.state)
        
    
}

    render(){
        return(
            <div>
            SUMA
            <form>
            
            <input type="text" id="num1"  onChange={(e)=>this.input(e)}/>
             <input type="text" id="num2"  onChange={(e)=>this.input(e)}/>
             <input type="button" value="Enviar" onClick={this.suma}/>
            </form>
            <div id="resultado"></div>    

            </div>
        )
    }
}

export default Calculadora