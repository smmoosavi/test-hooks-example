// useCounter.test.js

import { mount } from 'enzyme';

it('should has correct default value', () => {
  const wrapper = mount(<SampleComponent />);
  const value = fn.mock.calls[0][0]; // first value of first call of fn function.
  expect(value).toBe(0);
  wrapper.unmount();
});

it('should has correct initial value', () => {
  const wrapper = mount(<SampleComponent initialValue={50} />);
  const value = fn.mock.calls[0][0]; // first value of first call of fn function.
  expect(value).toBe(50);
  wrapper.unmount();
});
