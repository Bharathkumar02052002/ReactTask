function withUpperCase(WrappedComponent) {
  return function UpperCaseComponent({ text, ...props }) {
    const upperCaseText = text.toUpperCase();

    return <WrappedComponent message={upperCaseText} {...props} />;
  };
}

export default withUpperCase;
