import Image from "next/image";
import { prisma } from "../../../lib/prisma";

export const metadata = {
  title: "商品一覧表",
  description: "商品一覧のページです。お得な商品をチェックしよう！",
};

/*async function fetchItems() {
  await new Promise((resoleve) => setTimeout(resoleve, 3000));
  //throw new Error(`商品一覧の取得に失敗しました`);
  return ["商品A", "商品B", "商品C"];
}*/

export default async function ProductsPage() {
  const items = await prisma.item.findMany();

  return (
    <main>
      <h1>商品一覧</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}円
          </li>
        ))}
      </ul>
      <Image src="/a.jpg" alt="背景" width={400} height={300} />
    </main>
  );
}
