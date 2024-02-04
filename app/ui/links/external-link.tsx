import Link from "next/link";
import clsx from "clsx";
import { LinkProps } from "@/app/ui/utils/types";
import LinkIcon from "@/app/ui/icons/link";

export default function ExternalLink({
  children,
  className,
  ...rest
}: LinkProps) {
  return (
    <Link
      className={clsx(
        className,
        "inline-flex items-center leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
      )}
      {...rest}
    >
      {children}
      <LinkIcon className="h-4 w-4 shrink-0 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
    </Link>
  );
}
