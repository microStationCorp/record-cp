import { Metadata } from "next";

export default function AddCoach({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export const metadata: Metadata = {
  title: "Add new coach",
};
