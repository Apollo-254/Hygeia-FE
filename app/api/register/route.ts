import { NextResponse } from "next/server";

export async function POST(requsest: Request) {
  const body = await requsest.json();

  return NextResponse.json(body);
}
