"use client";

import NavLink from "@/app/ui/links/nav-link";
import { useFocusContext } from "@/app/ui/utils/focusContext";
import { getNavLinkProps } from "@/app/ui/utils/functions";
import { NavRoutes } from "@/app/ui/utils/types";

export default function Navigation() {
  const { currentId } = useFocusContext();

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <NavLink {...getNavLinkProps(NavRoutes.About, currentId)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink {...getNavLinkProps(NavRoutes.Experience, currentId)}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink {...getNavLinkProps(NavRoutes.Projects, currentId)}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
