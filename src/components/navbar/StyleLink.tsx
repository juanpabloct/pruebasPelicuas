import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface StyleLinkProps {
  route: string;
  children: ReactNode;
}
export const StyleLink = ({ children, route }: StyleLinkProps) => {
  return (
    <Link to={route} className="hover:text-zinc-500">
      {children}
    </Link>
  );
};
