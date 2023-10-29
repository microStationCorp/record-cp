import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { staffId: string } }
) {
  const staff = await prisma.staff.findFirst({
    where: {
      id: params.staffId,
    },
  });

  // console.log(staff);

  return NextResponse.json({ ...staff });
}
