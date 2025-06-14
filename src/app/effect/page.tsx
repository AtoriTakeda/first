"use client";

import { useState, useEffect } from "react";

export default function EffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ページが表示された！");
  }, []);

  useEffect(() => {
    console.log(`カウントが ${count} に更新された`);
  }, [count]);

  return (
    <main>
      <h1>useEffect使うぞ</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </main>
  );
}
