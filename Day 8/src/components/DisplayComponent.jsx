function DisplayComponent({ numbers, color }) {
  return (
    <div className="number-list" style={{ color }}>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}

export default DisplayComponent;
