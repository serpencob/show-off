import clsx from "clsx";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export default function InlineLink({
  className,
  children,
  ...rest
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      className={clsx(
        className,
        "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (Opens in a new tab)`}
      {...rest}
    >
      {children}
    </a>
  );
}
