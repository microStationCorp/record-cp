"use server";

import { prisma } from "@/utils/prisma";
import { Role } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const getStaffById = async (id: string) => {
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
    return staff;
  } catch (error) {
    return notFound();
  }
};

export const updateStaffAction = async (value: {
  name: string;
  designation: string;
  ticket_no: string;
  employee_no: string;
  staff_role: Role;
  id: string;
}) => {
  try {
    await prisma.staff.update({
      where: {
        id: value.id,
      },
      data: {
        name: value.name,
        designation: value.designation,
        ticket_no: value.ticket_no,
        employee_no: value.employee_no,
        staff_role: value.staff_role,
      },
    });

    revalidatePath("/staffs");

    return true;
  } catch {
    return false;
  }
};

export const addStaffAction = async (values: {
  name: string;
  designation: string;
  ticket_no: string;
  employee_no: string;
  staff_role: Role;
}) => {
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
    return false;
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

    revalidatePath("/staffs");

    return true;
  } catch {
    return false;
  }
};

export const deleteStaffAction = async (staffId: string) => {
  try {
    const res = await prisma.staff.delete({
      where: {
        id: staffId!,
      },
    });

    revalidatePath("/staffs");
    return true;
  } catch {
    return false;
  }
};
