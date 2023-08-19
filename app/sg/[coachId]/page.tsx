import DataTableComponent from "@/components/dataTableComp";
import { prisma } from "@/utils/prisma";

const getdata = async (id: string) => {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: id,
    },
    include: {
      SGCoaches: true,
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

  const coachEquipment: { title: string; data: string | null | undefined }[] = [
    { title: "plant", data: data?.SGCoaches?.plant },
    { title: "inverter", data: data?.SGCoaches?.inverter },
    { title: "RRU", data: data?.SGCoaches?.rru },
    { title: "battery", data: data?.SGCoaches?.battery },
    { title: "battery charger", data: data?.SGCoaches?.battery_charger },
    { title: "pump", data: data?.SGCoaches?.pump },
    { title: "alternator", data: data?.SGCoaches?.alternator },
    { title: "condenser", data: data?.SGCoaches?.condenser },
    { title: "compressor", data: data?.SGCoaches?.compressor },
    { title: "thermostat", data: data?.SGCoaches?.thermostat },
    { title: "no. of lights", data: data?.SGCoaches?.lights },
    { title: "no. of fans", data: data?.SGCoaches?.fan },
    { title: "no. of mobile charging point", data: data?.SGCoaches?.m_chg },
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
