"use client";

import NavLink from "./nav-link";
import { NavRoutes } from "./utils/types";
import { useFocusContext } from "./utils/focusContext";
import { getNavLinkProps } from "./utils/functions";
import { useIntersection } from "./utils/useIntersection";

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
