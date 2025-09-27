import { type ReactNode } from "react";

interface PassedProps {
  children: ReactNode;
}
export default function Article({ children }: PassedProps) {
  return <div>{children}</div>;
}
