// useCounter.test.js

import { mount } from 'enzyme';

it('should increment value by 1 by default', () => {
  const wrapper = mount(<SampleComponent initialValue={50} />);
  // secondary value of first call of fn function.
  const increment = fn.mock.calls[0][1];
  increment();
  // updated value: first value of secondary call of fn function.
  const value = fn.mock.calls[1][0];
  expect(value).toBe(51);
  wrapper.unmount();
});

it('should increment value by given step', () => {
  const wrapper = mount(<SampleComponent initialValue={50} />);
  // secondary value of first call of fn function.
  const increment = fn.mock.calls[0][1];
  increment(20);
  // updated value: first value of secondary call of fn function.
  const value = fn.mock.calls[1][0];
  expect(value).toBe(70);
  wrapper.unmount();
});
