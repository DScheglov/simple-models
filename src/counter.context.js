import React from 'react';
import { number, node } from 'prop-types';
import Counter from './Counter.class';
import { useModel } from './s-models';

const context = React.createContext();

export const CounterProvider = ({ initial = 0, children }) => {
  const counter = React.useMemo(
    () => new Counter(initial),
    [initial]
  );
  return <context.Provider value={counter}>{children}</context.Provider>;
};

export function useCounter() {
  const counter = React.useContext(context);
  return useModel(counter);
}

CounterProvider.propTypes = {
  initial: number,
  children: node,
};

export default context;
