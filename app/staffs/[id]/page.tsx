import StaffDetails from "@/components/staff/staff_detail";

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
