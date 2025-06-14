"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>カウンター</h1>
      <p>現在のカウント: {count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>increase</button>
      </p>
      <p>
        <button onClick={() => setCount(count - 1)}>decrease</button>
      </p>
      <button onClick={() => setCount(0)}>reset</button>
    </main>
  );
}
