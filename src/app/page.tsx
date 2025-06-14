import Link from "next/link";

type Hello = { message: string; time: string };

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });

  const data: Hello = await res.json();

  return (
    <main>
      <h1>ようこそ！</h1>
      <h2>サーバーで受け取ったデータ</h2>
      <p>{data.message}</p>
      <p>{new Date(data.time).toLocaleString()}</p>
      <p>
        <Link href="/about">自己紹介ページへ</Link>
      </p>
      <Link href="/contact">
        <button>どこか分からないページへ移動</button>
      </Link>
    </main>
  );
}
