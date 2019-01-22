import React from 'react';
import { mount } from 'enzyme';
import { useCounter } from './useCounter';

const fn = jest.fn();

const SampleComponent = props => {
  const [value, increment] = useCounter(props.initialValue);
  fn(value, increment); // all the magic is here
  return null;
};

describe('useCounter hook', () => {
  beforeEach(() => fn.mockClear());

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

  it('should increment value with 1 by default', () => {
    const wrapper = mount(<SampleComponent initialValue={50} />);
    const increment = fn.mock.calls[0][1]; // secondary value of first call of fn function.
    increment();
    const value = fn.mock.calls[1][0]; // updated value: first value of secondary call of fn function.
    expect(value).toBe(51);
    wrapper.unmount();
  });

  it('should increment value with given step', () => {
    const wrapper = mount(<SampleComponent initialValue={50} />);
    const increment = fn.mock.calls[0][1]; // secondary value of first call of fn function.
    increment(20);
    const value = fn.mock.calls[1][0]; // updated value: first value of secondary call of fn function.
    expect(value).toBe(70);
    wrapper.unmount();
  });
});
