import { RefObject, useEffect, useState } from "react";
import { NavRoutes } from "./types";
import { useFocusContext } from "./focusContext";

type FocusInfo = {
  [key in NavRoutes]?: boolean;
};

interface UseIntersectionProps {
  focusInfo: FocusInfo;
}

export const useIntersection = ({ focusInfo }: UseIntersectionProps) => {
  const [currentId, setCurrentId] = useState<NavRoutes>();

  const { about, experience, projects } = focusInfo;

  useEffect(() => {
    if (projects) {
      setCurrentId(NavRoutes.Projects);
    } else if (experience) {
      setCurrentId(NavRoutes.Experience);
    } else if (about) {
      setCurrentId(NavRoutes.About);
    }
  }, [about, experience, projects]);

  return currentId;
};
