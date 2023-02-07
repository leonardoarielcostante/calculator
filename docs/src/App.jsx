import { useState } from "react";

function App() {

  const arr = [
    {
      id: 10,
      valor: '0',
      text: 'zero'
    },
    {
      id: 20,
      valor: '1',
      text: 'one'
    },
    {
      id: 30,
      valor: '2',
      text: 'two'
    },
    {
      id: 40,
      valor: '3',
      text: 'three'
    },
    {
      id: 50,
      valor: '4',
      text: 'four'
    },
    {
      id: 60,
      valor: '5',
      text: 'five'
    },
    {
      id: 70,
      valor: '6',
      text: 'six'
    },
    {
      id: 80,
      valor: '7',
      text: 'seven'
    },
    {
      id: 90,
      valor: '8',
      text: 'eight'
    },
    {
      id: 100,
      valor: '9',
      text: 'nine'
    },
    {
      id: 110,
      valor: '+',
      text: 'add'
    },
    {
      id: 120,
      valor: '-',
      text: 'subtract'
    },
    {
      id: 130,
      valor: 'x',
      text: 'multiply'
    },
    {
      id: 140,
      valor: '/',
      text: 'divide'
    },
    {
      id: 150,
      valor: '=',
      text: 'equals'
    },
    {
      id: 160,
      valor: '.',
      text: 'decimal'
    },
    {
      id: 170,
      valor: 'AC',
      text: 'clear'
    }
];

  const [result, setResult] = useState('0');

function handleChange(event) {
  while(event === 'AC'){
    return(
      setResult('0')
    );
  }
  while(event === '1')
    return(
      setResult(result + '1')
    );
  while(event === '2')
    return(
      setResult(result + '2')
    );
  while(event === '3')
    return(
      setResult(result + '3')
    );
  while(event === '4')
    return(
      setResult(result + '4')
    );
  while(event === '5')
    return(
      setResult(result + '5')
    );
  while(event === '6')
    return(
      setResult(result + '6')
    );
  while(event === '7')
    return(
      setResult(result + '7')
    );
  while(event === '8')
    return(
      setResult(result + '8')
    );
  while(event === '9')
    return(
      setResult(result + '9')
    );
  while(event === '0')
    if(result != '0'){
      return (
        setResult(result + '0')
      )
    }else if(result === '0') {
      return(
        setResult('0')
      )
    }else {
      setResult('0')
    }
}

  return (
    <div className="App">
      <div className="calculadora">
        <div id="display">{ result }</div>
        <div className="botones">
          { arr.map((boton) => 
          <button id={boton.text} 
                  key={boton.id}
                  onClick={() => handleChange(boton.valor)}> { boton.valor }
                  
          </button>) }
        </div>
      </div>
    </div>
  )
}

export default App