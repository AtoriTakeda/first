"use server";

import { prisma } from "../../../../../lib/prisma";
import { itemSchema, ItemFormState } from "../../../../../lib/schema";
// import { redirect } from "next/navigation";

export async function updateItem(
  prevState: ItemFormState,
  formData: FormData
): Promise<ItemFormState> {
  const data = {
    name: formData.get("name"),
    price: formData.get("price"),
    id: formData.get("id"),
  };

  const result = itemSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, price, id } = result.data;

  await prisma.item.update({
    where: { id: Number(id) },
    data: { name, price },
  });

  return {
    errors: {},
    success: true,
  };

  // redirect("/items");
}
