import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { staffId: string } }
) {
  try {
    const res = await prisma.staff.delete({
      where: {
        id: params.staffId!,
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
