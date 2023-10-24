import { prisma } from "@/utils/prisma";

const getdata = async (id: string) => {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: id,
    },
    include: {
      PowerCoaches: true,
    },
  });
  return coach;
};

export default async function PowerCoach({
  params,
}: {
  params: { coachId: string };
}) {
  const data = await getdata(params.coachId);

  const coachDetails: { title: string; data: string | undefined | null }[] = [
    {
      title: "coach base",
      data: data?.base,
    },
    {
      title: "coach number",
      data: data?.coach_number,
    },
    {
      title: "coach type",
      data: data?.coach_type,
    },
    {
      title: "rake type",
      data: data?.rake_type,
    },
    {
      title: "POH date",
      data: data?.p_date,
    },
    {
      title: "return date",
      data: data?.r_date,
    },
  ];

  const coachEquipment:{title: string; data: string | undefined | null}[]=[
    {
      title:"Alternator",data:data?.PowerCoaches?.alternator
    },{
      title:"SBC AC Panel",data:data?.PowerCoaches?.sbc_ac
    },{
      title:"SBC Power Panel",data :data?.PowerCoaches?.sbc_power
    }
  ]

  return (
    <>
      <div>power car</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
