import InlineLink from "@/app/ui/links/inline-link";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{" "}
        <InlineLink href="https://www.figma.com/">Figma</InlineLink> and coded
        in{" "}
        <InlineLink href="https://www.figma.com/">
          Visual Studio Code
        </InlineLink>{" "}
        by me. Built with{" "}
        <InlineLink href="https://www.figma.com/">Next.js</InlineLink> and{" "}
        <InlineLink href="https://www.figma.com/">Tailwind CSS</InlineLink>,
        deployed with{" "}
        <InlineLink href="https://www.figma.com/">Vercel</InlineLink>. All text
        is set in the{" "}
        <InlineLink href="https://www.figma.com/">Inter</InlineLink> typeface.
      </p>
    </footer>
  );
}
