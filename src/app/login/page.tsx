"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  return (
    <main style={{ padding: "2rem" }}>
      <h1>ログイン</h1>
      <input
        placeholder="demo"
        value={username}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        placeholder="pass123"
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        onClick={() =>
          signIn("credentials", {
            username,
            password,
            callbackUrl: "/dashboard",
          })
        }
      >
        ログイン
      </button>
    </main>
  );
}
