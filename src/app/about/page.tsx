"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Hello = { message: string; time: string };

export default function AboutPage() {
  const [data, setData] = useState<Hello | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <main>
      <h1>自己紹介ページやで！</h1>
      <h2>クライアントで取ったデータ</h2>
      {data ? (
        <>
          <p>{data.message}</p>
          <p>{new Date(data.time).toLocaleString()}</p>
        </>
      ) : (
        <p>読み込み中...</p>
      )}
      <p>ここはaboutやで</p>
      <Link href="/">トップに戻る</Link>
    </main>
  );
}
