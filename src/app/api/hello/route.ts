export async function GET() {
  const data = { message: "やっほー、APIでごわす!", time: new Date() };

  return Response.json(data, { status: 200 });
}
