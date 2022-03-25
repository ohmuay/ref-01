import React,{useEffect, useState} from 'react';
import { isPrime } from './utils/isPrime';
import { isFib } from './utils/isFib';
import './App.scss';

function App() {
  const [inputNumber,setInputNumber] = useState('');
  const [operation,setOperation] = useState('isPrime');
  const [result,setResult] = useState(false);

  const handleInputChange = (event)=> {

    const {value} = event.target


    if(!value){
      return setInputNumber('')
    }

    if(value < 0){
      return setInputNumber('1');
    }

    setInputNumber(Math.round(value));
  }

  const handleSelectChange = (event)=>{
    setOperation(event.target.value);
  }


  useEffect(()=>{
    if(operation === 'isPrime'){
      setResult(isPrime(inputNumber));
    }else{
      setResult(isFib(inputNumber));
    }
    
  },[inputNumber,operation])

  return <div className="App">
    <div className="grid-container">
      <div className="grid-item grid-item--left">
        <input type="number" value={inputNumber} onChange={handleInputChange}/>
      </div>
      <div className="grid-item grid-item--middle">
        <select name="operation" id="operation" value={operation} onChange={handleSelectChange}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="grid-item grid-item--right">
        <p>{result.toString()}</p>
      </div>
    </div>
  </div>;
}

export default App;
