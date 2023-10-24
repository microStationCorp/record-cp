import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

type Props = {
  coach_number: string;
  coach_type: string;
  base: string;
  rake_type: string;
};

export async function POST(req: Request) {
  const { values }: { values: Props } = await req.json();

  const isPresent = await prisma.coaches.findFirst({
    where: {
      AND: [
        {
          coach_number: values.coach_number,
        },
        {
          coach_type: values.coach_type,
        },
        {
          base: values.base,
        },
      ],
    },
  });

  if (isPresent) {
    return NextResponse.json({
      success: false,
      message: "details already existed",
    });
  } else {
    try {
      const coachTypes: { [key: string]: string } = {
        SG: "SGCoaches",
        LHB: "LHBCoaches",
        GR: "GRCoaches",
        default: "PowerCoaches",
      };

      const coachType = coachTypes[values.rake_type] || coachTypes.default;

      await prisma.coaches.create({
        data: {
          base: values.base,
          coach_number: values.coach_number,
          coach_type: values.coach_type,
          rake_type: values.rake_type,
          [coachType]: { create: {} },
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
}
