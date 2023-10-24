import { Metadata } from "next";

export default async function StaffsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "Staffs",
};
