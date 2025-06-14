import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      { name: "商品A", price: 100 },
      { name: "商品B", price: 200 },
    ],
  });
}

main();
