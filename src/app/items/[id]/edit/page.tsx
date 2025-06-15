import { ReactElement } from "react";
import { prisma } from "../../../../../lib/prisma";
import Form from "./form";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditPage({
  params,
}: Props): Promise<ReactElement> {
  const item = await prisma.item.findUnique({
    where: { id: Number(params.id) },
  });

  return <Form item={item} />;
}
