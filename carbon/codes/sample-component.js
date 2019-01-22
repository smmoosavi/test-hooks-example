// useCounter.test.js

const SampleComponent = props => {
  const [value, increment] = useCounter(props.initialValue);
  fn(value, increment); // all the magic is here
  return null;
};
