import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { values } = await req.json();

  const isPresent = await prisma.staff.findFirst({
    where: {
      OR: [
        {
          employee_no: values.employee_no,
        },
        {
          ticket_no: values.ticket_no,
        },
      ],
    },
  });

  if (isPresent) {
    return NextResponse.json({
      success: false,
      message: "details already existed",
    });
  }

  try {
    await prisma.staff.create({
      data: {
        name: values.name,
        designation: values.designation,
        ticket_no: values.ticket_no,
        employee_no: values.employee_no,
        staff_role: values.staff_role,
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({
      success: false,
      message: "server error occured",
    });
  }
}
