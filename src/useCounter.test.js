import React from 'react';
import { useCounter } from './useCounter';
import { getLastCall } from './getLastCall';
import { mount } from 'enzyme';

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
    const [value] = getLastCall(fn);
    expect(value).toBe(0);
    wrapper.unmount();
  });

  it('should has correct initial value', () => {
    const wrapper = mount(<SampleComponent initialValue={50} />);
    const [value] = getLastCall(fn);
    expect(value).toBe(50);
    wrapper.unmount();
  });

  it('should increment value with 1 by default', () => {
    const wrapper = mount(<SampleComponent initialValue={50} />);
    const [, increment] = getLastCall(fn);
    increment();
    const [value] = getLastCall(fn);
    expect(value).toBe(51);
    wrapper.unmount();
  });

  it('should increment value with given step', () => {
    const wrapper = mount(<SampleComponent initialValue={50} />);
    const [, increment] = getLastCall(fn);
    increment(20);
    const [value] = getLastCall(fn);
    expect(value).toBe(70);
    wrapper.unmount();
  });
});
