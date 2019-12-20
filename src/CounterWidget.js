import React from 'react';
import { useCounter } from './counter.context';


function CounterWidget() {
  const counter = useCounter();
  console.log(counter);

  console.log('Rendering', Date.now());

  return (
    <div>
      <h1>{counter.getValue()}</h1>
      <hr />
      <button type="button" onClick={counter.inc}>Inc</button>
      <button type="button" onClick={counter.dec}>Dec</button>
      {' '}
|
      <button
        type="button"
        onClick={
          () => Array.from({ length: 10 }).forEach(counter.inc)
        }
      >
      + 10
      </button>
    </div>
  );
}

export default CounterWidget;
