// useCounter.test.js

it('should increment value with given step', () => {
  const wrapper = mount(<SampleComponent initialValue={50} />);
  const [, increment] = getLastCall(fn);
  increment(20);
  const [value] = getLastCall(fn);
  expect(value).toBe(70);
  wrapper.unmount();
});
