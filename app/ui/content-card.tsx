import Label from "@/app/ui/label";
import ExternalLink from "@/app/ui/links/external-link";
import { Tags } from "@/app/ui/utils/types";
import { PropsWithChildren } from "react";

export interface ContentCardProps {
  header: JSX.Element | string;
  title: string;
  href: string;
  subtitle?: string;
  tags?: Tags[] | string[];
}

export default function ContentCard({
  header,
  title,
  subtitle,
  href,
  tags,
  children,
}: PropsWithChildren<ContentCardProps>) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {header}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <ExternalLink
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${
              subtitle ? `${subtitle} at ` : ""
            }${title} (opens in a new tab)`}
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
          >
            {title}
          </ExternalLink>
          <span className=" block text-slate-500">{subtitle}</span>
        </h3>
        <p className="mt-2 text-sm leading-normal">{children}</p>
        <ul className="mt-2 flex flex-wrap">
          {tags?.map((tag) => (
            <li className="mr-1.5 mt-2" key={tag}>
              <Label text={tag} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
