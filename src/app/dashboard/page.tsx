import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <h1>ダッシュボード</h1>
      <p>{session.user?.name ?? "ユーザー"} さん、ようこそ！</p>
    </main>
  );
}
