import { mutate } from "swr";

type PResponse = { success: false; message: string } | { success: true };

export async function addStaff({
  values,
  closeModal,
}: {
  values: {
    name: string;
    designation: string;
    ticket_no: string;
    employee_no: string;
    staff_role: string;
  };
  closeModal: () => void;
}) {
  const res = await fetch("/api/staff/add_staff", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ values }),
  });

  mutate("/api/staff/get_staff");

  const response = await res.json();

  if (response.success) {
    closeModal();
  } else {
    console.log(response.message);
  }
}
