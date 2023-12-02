"use client";

import Link from "next/link";
import { DeleteButton } from "./delete_staff_component";
import { EditButton } from "./edit_staff_component";

export default function StaffActionGroup({ staffId }: { staffId: string }) {
  return (
    <div className="flex justify-between mt-2">
      <GoToStaffButton values={{ staffId }} />
      {/* delete button */}
      <DeleteButton values={{ staffId }} />
      {/* edit button */}
      <EditButton values={{ staffId }} />
    </div>
  );
}

function GoToStaffButton({ values }: { values: { staffId: string } }) {
  return (
    <Link href={`/staffs/${values.staffId}`} className="btn btn-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Link>
  );
}
