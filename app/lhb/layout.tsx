import Sidebar from "@/components/sidebar";
import { prisma } from "@/utils/prisma";
import { Metadata } from "next";

const getData = async () => {
  const coaches = await prisma.coaches.findMany({
    orderBy: {
      created_at: "desc",
    },
    where: {
      rake_type: "LHB",
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

export default async function LHBlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <Sidebar data={data} list_head="LHB Car List" link_prefix="lhb">
      {children}
    </Sidebar>
  );
}

export const metadata: Metadata = {
  title: "LHB Cars",
};
