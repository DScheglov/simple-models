/* eslint-disable no-plusplus */
import model from './s-models';

const Counter = (value = 0) => model(
  ({ action }) => ({
    inc: action(() => value++),
    dec: action(() => value--),
    getValue: () => value,
  })
);

export default Counter;
