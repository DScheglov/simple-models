/* eslint-disable prefer-rest-params */
const unsubscribe = (listeners, listener) => () => {
  const index = listeners.indexOf(listener);
  if (index >= 0) listeners.splice(index, 1);
};

const subscribe = ({ listeners }) => listener => {
  listeners.push(listener);
  return unsubscribe(listeners, listener);
};

const call = fn => fn();

const notificationTask = state => () => {
  state.notifying = true;
  state.microTask = null;
  try {
    state.listeners.forEach(call);
  } finally {
    state.notifying = false;
  }
};

const notify = state => {
  if (state.notifying) throw new Error('Don\'t update state when react on it\'s changes');
  state.microTask = state.microTask || Promise.resolve().then(
    notificationTask(state)
  );
};

const action = state => fn => function actionOf() {
  const result = fn.apply(this, arguments);
  notify(state);
  return result;
};

const createPublisherApi = state => ({
  subscribe: subscribe(state),
  notify: () => notify(state),
  action: action(state),
});

const createPublisherState = () => ({
  listeners: [],
  microTask: null,
  notifying: false,
});

const createPublisher = () => createPublisherApi(
  createPublisherState()
);

export default createPublisher;
