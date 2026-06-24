function withBackgroundColor(WrappedComponent) {
  return function BackgroundColorComponent({ color, ...props }) {
    return (
      <div className="color-preview" style={{ backgroundColor: color || 'transparent' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBackgroundColor;
