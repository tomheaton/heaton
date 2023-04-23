import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "heaton",
    timestamp: new Date().toISOString(),
  });
}
