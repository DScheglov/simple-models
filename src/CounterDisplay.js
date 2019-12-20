import React from 'react';
import { useCounter } from './counter.context';

function CounterDisplay() {
  const counter = useCounter();
  return <h2>{counter.getValue()}</h2>;
}


export default CounterDisplay;
