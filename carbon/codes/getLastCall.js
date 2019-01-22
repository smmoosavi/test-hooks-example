export const getLastCall = fn => {
  return fn.mock.calls[fn.mock.calls.length - 1];
};
