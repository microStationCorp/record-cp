import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { value } = await req.json();

  try {
    const res = await prisma.staff.update({
      where: {
        id: value.id,
      },
      data: {
        name: value.name,
        designation: value.designation,
        ticket_no: value.ticket_no,
        employee_no: value.employee_no,
        staff_role:value.staff_role
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
