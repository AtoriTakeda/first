import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const items = ["1", "2", "3"];

  if (!items.includes(id)) {
    notFound();
  }

  return (
    <main>
      <h1>商品ページ</h1>
      <p>商品ID: {id}</p>
    </main>
  );
}
