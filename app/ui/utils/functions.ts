import { IntersectionOptions } from "react-intersection-observer";
import { NavRoutes } from "./types";

export const getNavLinkProps = (id: NavRoutes, currentId?: NavRoutes) => {
  return {
    href: `#${id}`,
    active: id === currentId,
  };
};

export const getIntersectionOptions = (
  id: NavRoutes
): IntersectionOptions | undefined => {
  switch (id) {
    case NavRoutes.About:
      return {
        threshold: 0.8,
      };
    case NavRoutes.Experience:
      return {
        rootMargin: "100px 0px",
        threshold: 1,
      };
    case NavRoutes.Projects:
      return {
        threshold: 1,
      };

    default:
      return undefined;
  }
};
