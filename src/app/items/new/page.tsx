"use client";

import { CreateItem } from "../../actions";
import { useFormState } from "react-dom";

export default function NewItemPage() {
  const [state, formAction] = useFormState(CreateItem, { errors: {} });

  return (
    <main>
      <h1>新しいアイテムを作成</h1>
      <form action={formAction}>
        <div>
          <label>商品名：</label>
          <input type="text" name="name" className="border" />
          {state.errors?.name && (
            <div className="text-red-500">{state.errors.name[0]}</div>
          )}
        </div>

        <div>
          <label>価格：</label>
          <input type="number" name="price" className="border" />
          {state.errors?.price && (
            <div className="text-red-500">{state.errors.price[0]}</div>
          )}
        </div>

        <button type="submit">作成</button>
      </form>
    </main>
  );
}
