import { type ReactNode } from "react";

interface PassedProps {
  children: ReactNode;
}
const Article = ({ children }: PassedProps) => {
  return <div>{children}</div>;
};

export default Article;
