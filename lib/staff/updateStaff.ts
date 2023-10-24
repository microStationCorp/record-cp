import { mutate } from "swr";

export async function UpdateStaff({
  value,
  closeModal,
  staffId,
}: {
  value: {
    name: string;
    designation: string;
    ticket_no: string;
    employee_no: string;
    staff_role: string;
  };
  closeModal: () => void;
  staffId: string;
}) {
  const res = await fetch("/api/staff/update_staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: { ...value, id: staffId },
    }),
  });
  // for update list immidiately
  mutate("/api/staff/get_staff");

  const response = await res.json();

  if (response.success) {
    closeModal();
  }
}
