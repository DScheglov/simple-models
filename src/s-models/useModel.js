import React from 'react';


export function useModel(model) {
  const incVersion = React.useReducer(v => v + 1, 0)[1];

  const instance = React.useMemo(
    () => (
      typeof model === 'function' ? model() : model
    ),
    [model]
  );

  React.useLayoutEffect(
    () => instance.subscribe(incVersion),
    [instance, incVersion]
  );

  return instance;
}
