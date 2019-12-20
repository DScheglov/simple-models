/* eslint-disable prefer-rest-params */
import createPublisher from './publisher';

const publishers = new WeakMap();

const wrappedMethod = method => function actionMethod() {
  const result = method.apply(this, arguments);
  publishers.get(this).notify();
  return result;
};

const wrappedInitializer = initializer => function actionInitializer() {
  const method = initializer.call(this);
  return publishers.get(this).action(method);
};

export const action = (target, key, descriptor) => {
  const { value, initializer } = descriptor;
  if (value) {
    descriptor.value = wrappedMethod(value);
  }
  if (initializer) {
    descriptor.initializer = wrappedInitializer(initializer);
  }
};

class Model {
  constructor() {
    publishers.set(this, createPublisher());
  }

  subscribe(listener) {
    publishers.get(this).subscribe(listener);
  }

  notify() {
    publishers.get(this).notify();
  }
}

export default Model;
