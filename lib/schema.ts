import { z } from "zod";

export const itemSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  price: z.coerce.number().int().positive("価格は正の整数で入力してください"),
  id: z.string().optional(),
});

export type ItemFormState = {
  errors: {
    name?: string[];
    price?: string[];
    id?: string[];
  };
  success?: boolean;
};
