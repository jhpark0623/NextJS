import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>counter : {count}</h2>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
}
