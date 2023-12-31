"use client";

import StaffActionGroup from "./staff_action_group";
import { Role } from "@prisma/client";
import { useState } from "react";

type PStaff = {
  id?: string;
  created_at: Date;
  name: string;
  designation: string;
  ticket_no: string;
  employee_no: string;
  staff_role: string;
};

export default function StaffList({ staffs }: { staffs: PStaff[] }) {
  const [category, setCategory] = useState("ALL");

  // useEffect(() => {K

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const roles = [
    { label: "All", value: "ALL" },
    { label: "Sr.Tech", value: Role.SRTECH },
    { label: "ACF", value: Role.ACF },
    { label: "ACH", value: Role.ACH },
    { label: "OED", value: Role.OED },
  ];

  return (
    <div className="mt-8 mb-4 mx-2 sm:w-5/6 sm:mx-auto flex flex-col gap-2">
      {staffs!.length === 0 ? (
        <div className="text-center bg-slate-100 rounded-md p-8 capitalize">
          nothing to show
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="capitalize">
              total number of staffs : {staffs!.length}
            </div>
            <div className="join">
              {roles.map((role) => (
                <input
                  key={role.value}
                  className="join-item btn btn-sm"
                  type="radio"
                  name="options"
                  aria-label={role.label}
                  value={role.value}
                  defaultChecked={role.value === "ALL"}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
          {staffs!
            .filter((s: PStaff) =>
              category !== "ALL" ? s.staff_role === category : true
            )
            .map((s: PStaff) => (
              <div key={s.id} className="collapse collapse-plus bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-base font-medium capitalize">
                  {s.name}
                </div>
                <div className="collapse-content">
                  <div className="text-sm">Designation : {s.designation}</div>
                  <div className="text-sm">Ticket number : {s.ticket_no}</div>
                  <div className="text-sm">
                    Employee Number : {s.employee_no}
                  </div>
                  <StaffActionGroup staffId={s.id!} />
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
