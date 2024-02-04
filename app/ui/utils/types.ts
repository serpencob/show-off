import { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> &
  NextLinkProps;

export type Tags =
  | "JavaScript"
  | "TypeScript"
  | "HTML & CSS"
  | "React"
  | "Next.js"
  | "React Native"
  | "Contentful"
  | "AWS"
  | "Node.js"
  | "SCSS"
  | "GraphQL"
  | "Vue.js"
  | "Svelte";

export enum NavRoutes {
  About = "about",
  Experience = "experience",
  Projects = "projects",
}
