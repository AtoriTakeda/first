"use server";

import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "名前は必須です" }),
  price: z.coerce.number().min(1, "価格は1以上で入力してください"),
});

const schema2 = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "名前は必須です" }),
  price: z.coerce.number().min(1, "価格は1以上で入力してください"),
});

export async function CreateItem(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    price: formData.get("price"),
  };

  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }

  const { name, price } = result.data;

  await prisma.item.create({
    data: {
      name,
      price: Number(price),
    },
  });

  return { errors: {} };
  //redirect("/items");
}

export async function DeleteItem(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.item.delete({
    where: { id },
  });

  redirect("/items");
}

export const UpdateItem = async (prevState: any, formData: FormData) => {
  const data = {
    id: formData.get("id"),
    name: formData.get("name"),
    price: formData.get("price"),
  };

  const result = schema2.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { id, name, price } = result.data;

  await prisma.item.update({
    where: { id: Number(id) },
    data: { name, price },
  });

  redirect("/items");
};
