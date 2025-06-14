"use client";

import { useFormState } from "react-dom";
import { updateItem } from "./action";
import { ItemFormState } from "../../../../../lib/schema";
import { SubmitButton } from "../../EditForm";
import Link from "next/link";

export default function Form({ item }: { item: any }) {
  const initialState: ItemFormState = { errors: {}, success: false };
  const [state, formAction] = useFormState(updateItem, initialState);

  return (
    <main>
      <h1>商品を編集する</h1>
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="id" value={item?.id} />

        <div>
          <label>商品名:</label>
          <input
            defaultValue={item?.name}
            name="name"
            className="border px-2"
          />
          {state.errors?.name && (
            <p className="text-red-500 text-sm">
              {state.errors.name.join(", ")}
            </p>
          )}
        </div>

        <div>
          <label>価格:</label>
          <input
            defaultValue={item?.price}
            name="price"
            className="border px-2"
          />
          {state.errors?.price && (
            <p className="text-red-500 text-sm">
              {state.errors.price.join(", ")}
            </p>
          )}
        </div>

        <SubmitButton />
      </form>
      {state.success && (
        <p className="text-green-600 text-sm mt-2">更新完了！</p>
      )}
      <Link href="/items" className="text-blue-600 underline block mt-4">
        一覧に戻る
      </Link>
    </main>
  );
}
