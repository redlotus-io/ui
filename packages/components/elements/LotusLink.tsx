import NextLink from "next/link";
import { Link, NavLink } from "react-router-dom";

import { useApp } from "../../context";

interface Props {
  children: any;
  to: string;
  navLink?: boolean;
}

export const LotusLink = ({ children, to, navLink = false }: Props) => {
  const { framework } = useApp();

  if (framework === "vite") {
    if (navLink) {
      return (
        <NavLink to={to} end>
          {children}
        </NavLink>
      );
    }
    return <Link to={to}>{children}</Link>;
  }
  return <NextLink href={to}>{children}</NextLink>;
};
