import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";

const getStaff = async (id: string) => {
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

export default async function StaffDetails({ id }: { id: string }) {
  const staff = await getStaff(id);
  return (
    <div className="bg-slate-300 container mx-auto mt-8 p-4">
      <div className="text-2xl text-center">{staff?.name}</div>
    </div>
  );
}
