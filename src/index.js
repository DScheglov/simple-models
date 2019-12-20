import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider } from './counter.context';
import CounterWidget from './CounterWidget';
import CounterDisplay from './CounterDisplay';


function App() {
  return (
    <div className="container">
      <CounterProvider initial={100}>
        <CounterWidget />
        <hr />
        <CounterDisplay />
      </CounterProvider>
    </div>
  );
}

ReactDOM.render(
  <App />,
  global.document.getElementById('app')
);
