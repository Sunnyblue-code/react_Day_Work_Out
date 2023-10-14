import { useState } from "react";

const Statetest = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Statetest</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default Statetest;
