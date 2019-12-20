import createPublisher from './publisher';
import { useModel } from './useModel';
import Model, { action } from './Model';


export { useModel, Model, action };

const model = modelLogic => {
  const { action: _action, notify, subscribe } = createPublisher();
  return {
    ...modelLogic({ action: _action, notify }),
    subscribe
  };
};

export default model;
