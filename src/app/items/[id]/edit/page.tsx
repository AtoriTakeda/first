import { ReactElement } from "react";
import { prisma } from "../../../../../lib/prisma";
import Form from "./form";

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

export default async function EditPage({
  params,
}: PageProps): Promise<ReactElement> {
  const item = await prisma.item.findUnique({
    where: { id: Number(params.id) },
  });

  return <Form item={item} />;
}
