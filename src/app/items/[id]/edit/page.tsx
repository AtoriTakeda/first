import { prisma } from "../../../../../lib/prisma";
import Form from "./form";

export default async function EditPage({ params }: { params: { id: string } }) {
  const item = await prisma.item.findUnique({
    where: { id: Number(params.id) },
  });

  return <Form item={item} />;
}
