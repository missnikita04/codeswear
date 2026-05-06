import { NextResponse } from "next/server";

const pincodes = [
  302001,
  302020,
  302039,
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: pincodes,
  });
}