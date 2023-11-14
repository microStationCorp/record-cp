import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const staffs = await prisma.staff.findMany();

  return NextResponse.json({ staffs });
}
