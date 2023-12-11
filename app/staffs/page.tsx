import AddStaffComp from "@/components/staff/add_staff";
import StaffList from "@/components/staff/stafflist";
import { getAllStaff } from "../action";

export default async function Staffs() {
  const staffs=await getAllStaff()
  return (
    <>
      {/* container */}
      <div>
        {/* new staff link */}
        <AddStaffComp />
        {/* staff list */}
        <StaffList staffs={staffs}/>
      </div>
    </>
  );
}
