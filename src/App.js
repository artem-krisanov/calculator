import React,{useState} from 'react';
import './App.css';


function App() {

  const func = (arg) => {
    if (arg==="="){
      try{
      setResult(eval(calculate))}
      catch(err) {
        
      }
    } else if (arg==="AC") {
      setCalculate('');
      setResult('');
    } else {
      if (calculate.length === 0) {
        setCalculate(calculate+arg);
      }

      if (isNaN(Number(calculate[calculate.length-1])) && isNaN(Number(arg))) {
        return;
      }

      setCalculate(calculate+arg);
    }
  }

  const [calculate, setCalculate] = useState('')
  const [result, setResult] = useState('')
  return (
    <div className="App">
      <div id="display">
        <div id="calculate">{calculate}</div>
        <div id="result">{result}</div>
      </div>
      <div id="button-container">
        <div id="ac" onClick={(e) => func(e.target.innerText)}>AC</div>
        <div id="equal"  onClick={(e) => func(e.target.innerText)}>=</div>
        <div id="zero"  onClick={(e) => func(e.target.innerText)}>0</div>
        <div  onClick={(e) => func(e.target.innerText)}>/</div>
        <div  onClick={(e) => func(e.target.innerText)}>*</div>
        <div  onClick={(e) => func(e.target.innerText)}>1</div>
        <div  onClick={(e) => func(e.target.innerText)}>2</div>
        <div  onClick={(e) => func(e.target.innerText)}>3</div>
        <div  onClick={(e) => func(e.target.innerText)}>+</div>
        <div  onClick={(e) => func(e.target.innerText)}>4</div>
        <div  onClick={(e) => func(e.target.innerText)}>5</div>
        <div  onClick={(e) => func(e.target.innerText)}>6</div>
        <div  onClick={(e) => func(e.target.innerText)}>-</div>
        <div  onClick={(e) => func(e.target.innerText)}>7</div>
        <div  onClick={(e) => func(e.target.innerText)}>8</div>
        <div  onClick={(e) => func(e.target.innerText)}>9</div>
        <div  onClick={(e) => func(e.target.innerText)}>.</div>
      </div>
    </div>
  );
}

export default App;
