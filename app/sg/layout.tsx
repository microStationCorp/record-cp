import Sidebar from "@/components/sidebar";
import { prisma } from "@/utils/prisma";
import { Metadata } from "next";

const getData = async () => {
  const coaches = await prisma.coaches.findMany({
    orderBy: {
      created_at: "desc",
    },
    where: {
      rake_type: "SG",
    },
    select: {
      id: true,
      base: true,
      coach_number: true,
      coach_type: true,
    },
  });
  return coaches;
};

export default async function SGlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <Sidebar data={data} list_head="SG Coach List" link_prefix={"sg"}>
      {children}
    </Sidebar>
   );
}

export const metadata: Metadata = {
  title: "SG coaches",
};
