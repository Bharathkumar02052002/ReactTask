function withIteration(WrappedComponent) {
  return function IterationComponent({ count, color, ...props }) {
    const total = Number(count) || 0;
    const numbers = Array.from({ length: total }, (_, index) => index + 1);

    return <WrappedComponent numbers={numbers} color={color} {...props} />;
  };
}

export default withIteration;
