import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <h2>これは何のページ?</h2>
      <Link href="/">
        <button>親ページに戻る！</button>
      </Link>
    </main>
  );
}
