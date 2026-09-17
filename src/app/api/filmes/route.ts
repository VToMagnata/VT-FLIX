import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL não informada" }, { status: 400 });
  }

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
