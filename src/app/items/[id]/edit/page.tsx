import { prisma } from "../../../../../lib/prisma";
import Form from "./form";

export default async function EditPage(props: any) {
  const item = await prisma.item.findUnique({
    where: { id: Number(props.params.id) },
  });

  return <Form item={item} />;
}
