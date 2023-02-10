import { useState } from "react";
import './App.css';


function App() {

  const operadores = ['+', '-', '*', '/'];
  const [resultado, setResultado] = useState('0');
  const [formula, setFormula] = useState(''); 

  const limpiar = () => {
    setResultado('0');
    setFormula('');
  }

  const punto = (boton) => {
     if(formula === ''){
      setFormula('0.');
     }
     if(resultado === '0'){
      setResultado('0.');
     }

     if(resultado.indexOf('.') === -1 && formula !== ''){
      setResultado(resultado + '.')
      setFormula(formula + '.');
     }
  }

  const numero = (valor) => {

    if(formula.indexOf('.') !== -1){
      setFormula('.');
    }

    if(formula === '0'){
        setFormula(valor.target.value);
        setResultado(valor.target.value);
    }else{
      setFormula(formula + valor.target.value);
    }
    
    if(resultado === '0'){
      setResultado(valor.target.value);
    } else {
      setResultado(resultado + valor.target.value);
    }

    if(operadores.includes(resultado)){
      setResultado(valor.target.value);
    }

    if(formula.indexOf('=') !== -1){
      setFormula(valor.target.value)
      setResultado(valor.target.value)
    }
  }

  const igual = () => {
      setResultado(eval(formula));
      
      if(formula.indexOf('=') === -1){
        setFormula(formula + '=' + eval(formula))
      }
  }

  const operador = (boton) => {
    setFormula(formula + boton.target.value);
    setResultado(boton.target.value);

    if(formula.indexOf('=') !== -1){
      setFormula(resultado + boton.target.value)
    }

    if(operadores.includes(formula[formula.length - 1]) && boton.target.value !== '-'){
      setFormula(formula.replace(/[*\/+-]+$/, boton.target.value))
    }
  }

  return(
  <div className="contenedor">
    <header className="header">
      <h1 className="titulo">Calculadoran't</h1>
    </header>
    <main>
      <article>
      <input className="inputs" id='calculo' type='text' onChange={ setFormula } value={formula}></input>
      <input className="inputs" id='display' type='text' onChange={ setResultado } value={ resultado }></input>
      </article>
      <article className="botones">
        <div className="numeros">
          <button id='one' value='1' onClick={ numero }>1</button>
          <button id='two' value='2' onClick={ numero }>2</button>
          <button id='three' value='3' onClick={ numero }>3</button>
          <button id='four' value='4' onClick={ numero }>4</button>
          <button id='five' value='5' onClick={ numero }>5</button>
          <button id='six' value='6' onClick={ numero }>6</button>
          <button id='seven' value='7' onClick={ numero }>7</button>
          <button id='eight' value='8' onClick={ numero }>8</button>
          <button id='nine' value='9' onClick={ numero }>9</button>
          <button id='decimal' value='.' onClick={ punto }>.</button>
          <button id='zero' value='0' onClick={ numero }>0</button>
          <button id='clear' onClick={ limpiar } >AC</button>
        </div>
        <div className="simbolos">
          <button id='add' value='+' onClick={ operador }>+</button>
          <button id='subtract' value='-' onClick={ operador }>-</button>
          <button id='multiply' value='*' onClick={ operador }>*</button>
          <button id='divide' value='/' onClick={ operador }>/</button>
          <button id='equals' onClick={ igual }>=</button>
        </div>
      </article>
    </main>
  </div>
  )
}

export default App
