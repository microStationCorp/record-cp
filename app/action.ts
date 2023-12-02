"use server";

import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";

export const getStaff = async (id: string) => {
  try {
    const staff = await prisma.staff.findFirst({
      where: {
        id: id,
      },
    });
    return staff;
  } catch (error) {
    return notFound();
  }
};

export const getAllStaff = async () => {
  try {
    const staff = await prisma.staff.findMany();
  } catch (error) {
    return notFound();
  }
};
