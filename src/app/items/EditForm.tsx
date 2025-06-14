"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${
        pending ? "opacity-50" : ""
      }`}
    >
      {pending ? "更新中..." : "更新"}
    </button>
  );
}
