import AddStaffComp from "@/components/staff/add_staff";
import StaffList from "@/components/staff/stafflist";
import { prisma } from "@/utils/prisma";

export const dynamic = "force-dynamic";

async function getStaffs() {
  const staffs = await prisma.staff.findMany();

  return staffs;
}

export default async function Staffs() {
  const staffs = await getStaffs();
  return (
    <>
      {/* container */}
      <div>
        {/* new staff link */}
        <AddStaffComp />
        {/* staff list */}
        <StaffList staffs={staffs} />
      </div>
    </>
  );
}
