"use client";

import { HTMLAttributes, PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useFocusContext } from "./utils/focusContext";
import { NavRoutes } from "./utils/types";
import { getIntersectionOptions } from "./utils/functions";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id: NavRoutes;
}

export default function Section({
  id,
  children,
  className,
  ...rest
}: PropsWithChildren<SectionProps>) {
  const { updateCurrentId } = useFocusContext();
  const { ref, inView } = useInView(getIntersectionOptions(id));

  useEffect(() => {
    if (inView && updateCurrentId) {
      updateCurrentId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      id={id}
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      {...rest}
    >
      {children}
    </div>
  );
}
