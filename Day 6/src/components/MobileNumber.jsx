import { useState } from 'react';

function MobileNumber() {
  const [mobileNumber, setMobileNumber] = useState(null);

  return (
    <article className="task-card">
      <span className="task-number">Task 9</span>
      <h2>Mobile Number</h2>
      <button onClick={() => setMobileNumber(9876543210)}>Show Mobile Number</button>
      {mobileNumber && <p>Mobile Number: <strong>{mobileNumber}</strong></p>}
    </article>
  );
}

export default MobileNumber;
