/* eslint-disable no-plusplus */
import { Model, action } from './s-models';

class Counter extends Model {
  constructor(initial = 0) {
    super();
    this.value = initial;
  }

  getValue() {
    return this.value;
  }

  @action
  inc = () => {
    this.value++;
  }

  @action
  dec = () => {
    this.value--;
  }
}

export default Counter;
