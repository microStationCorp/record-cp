import { Metadata } from "next";

export default async function AddCoachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "Add new coach",
};
