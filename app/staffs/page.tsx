import AddStaffComp from "@/components/staff/add_staff";
import StaffList from "@/components/staff/stafflist";

export default async function Staffs() {
  return (
    <>
      {/* container */}
      <div>
        {/* new staff link */}
        <AddStaffComp />
        {/* staff list */}
        <StaffList/>
      </div>
    </>
  );
}
