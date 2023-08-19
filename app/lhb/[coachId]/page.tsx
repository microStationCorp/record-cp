import DataTableComponent from "@/components/dataTableComp";
import { prisma } from "@/utils/prisma";

const getdata = async (id: string) => {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: id,
    },
    include: {
      LHBCoaches: true,
    },
  });
  return coach;
};

export default async function SGCoach({
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

  const coachEquipment: { title: string; data: string | undefined | null }[] = [
    { title: "switch board cabinet", data: data?.LHBCoaches?.sbc },
    { title: "RBC", data: data?.LHBCoaches?.rbc },
    { title: "EBC", data: data?.LHBCoaches?.ebc },
    { title: "ERBC", data: data?.LHBCoaches?.erbc },
    { title: "battery", data: data?.LHBCoaches?.battery },
    { title: "microcontroller", data: data?.LHBCoaches?.microcontroller },
    { title: "no of lights", data: data?.LHBCoaches?.lights },
    { title: "no of mobile charging socket", data: data?.LHBCoaches?.m_chg },
    { title: "no of AEL", data: data?.LHBCoaches?.ael },
    { title: "make of net contactor", data: data?.LHBCoaches?.net_contactor },
    { title: "make of K44", data: data?.LHBCoaches?.k44 },
    { title: "make of mmr", data: data?.LHBCoaches?.mmr },
    { title: "condenser", data: data?.LHBCoaches?.condenser },
    { title: "compressor", data: data?.LHBCoaches?.compressor },
    { title: "pump", data: data?.LHBCoaches?.pump },
  ];

  return (
    <>
      <DataTableComponent
        coachDetails={coachDetails}
        coachEquipment={coachEquipment}
      />
    </>
  );
}
