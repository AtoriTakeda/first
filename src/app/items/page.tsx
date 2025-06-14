import { prisma } from "../../../lib/prisma";
import { DeleteItem } from "../actions";
import Link from "next/link";

export const metadata = {
  title: "新しいアイテム",
};

export default async function ItemsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  const items = await prisma.item.findMany({
    where: {
      name: {
        contains: query || undefined,
      },
    },
  });

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">新しい商品一覧</h1>
      <Link href="/items/new" className="text-blue-600 underline mb-4 block">
        + 新しい商品を追加
      </Link>
      <form>
        <input
          type="text"
          name="query"
          placeholder="商品名で検索"
          defaultValue={query}
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
        >
          検索
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} --- {item.price}円!!
            <a
              href={`/items/${item.id}/edit`}
              className="ml-2 text-blue-600 underline"
            >
              編集
            </a>
            <form action={DeleteItem}>
              <input type="hidden" name="id" value={item.id} />
              <button className="ml-2 bg-red-500 text-white px-2 rounded">
                削除
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
