import React from 'react';

import './App.css';
import Imagen from './components/Imagen'
import Calculadora from './components/calculadora'
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>May the force be with you</h1>
        <h3>Hola</h3>
      </div>
      <Imagen className="gif-centro"/>
      <Calculadora/>
    </div>
  );
}

export default App;
