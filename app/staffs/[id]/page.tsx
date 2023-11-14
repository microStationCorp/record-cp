import StaffDetails from "@/components/staff/staff_detail";

export const dynamic = "force-dynamic";

export default function IndiVidualStaff({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <StaffDetails id={params.id} />
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const response = await fetch(
    `http://localhost:3000/api/staff/get_staff_by_id/${params.id}`
  ).then((res) => res.json());

  return {
    title: response!.name,
  };
}
