import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { values } = await req.json();
  console.log("values", values);

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
      switch (values.rake_type) {
        case "SG":
          await prisma.coaches.create({
            data: {
              base: values.base,
              coach_number: values.coach_number,
              coach_type: values.coach_type,
              rake_type: values.rake_type,

              SGCoaches: { create: {} },
            },
          });
          break;
        case "LHB":
          await prisma.coaches.create({
            data: {
              base: values.base,
              coach_number: values.coach_number,
              coach_type: values.coach_type,
              rake_type: values.rake_type,

              LHBCoaches: { create: {} },
            },
          });
          break;
        case "GR":
          await prisma.coaches.create({
            data: {
              base: values.base,
              coach_number: values.coach_number,
              coach_type: values.coach_type,
              rake_type: values.rake_type,

              GRCoaches: { create: {} },
            },
          });
          break;
        case "PANTRY":
          await prisma.coaches.create({
            data: {
              base: values.base,
              coach_number: values.coach_number,
              coach_type: values.coach_type,
              rake_type: values.rake_type,

              PantryCoaches: { create: {} },
            },
          });
          break;
        default:
          await prisma.coaches.create({
            data: {
              base: values.base,
              coach_number: values.coach_number,
              coach_type: values.coach_type,
              rake_type: values.rake_type,

              PowerCoaches: { create: {} },
            },
          });
      }
      return NextResponse.json({ success: true });
    } catch {
      return NextResponse.json({
        success: false,
        message: "server error occured",
      });
    }
  }
}
