"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function StaffDetails({ id }: { id: string }) {
  const { data: staff } = useSWR<{
    id: string;
    name: string;
    designation: string;
    ticket_no: string;
    employee_no: string;
    staff_role: string;
  }>(`/api/staff/get_staff_by_id/${id}`, fetcher);

  return (
    <div className="bg-slate-300 container mx-auto mt-8 p-4">
      <div className="text-2xl text-center">{staff?.name}</div>
    </div>
  );
}
