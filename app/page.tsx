import { prisma } from "@/utils/prisma";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>home page</div>
    </>
  );
}

const getData = async () => {
  return await prisma.coaches.findMany({
    include: {
      SGCoaches: true,
    },
  });
};
