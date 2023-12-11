import { getStaffById } from "@/app/action";

export default async function StaffDetails({ id }: { id: string }) {
  const staff = await getStaffById(id);
  return (
    <div className="bg-slate-300 container mx-auto mt-8 p-4">
      <div className="text-2xl text-center">{staff?.name}</div>
    </div>
  );
}
