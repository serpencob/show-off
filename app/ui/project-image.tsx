import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export default function ProjectImage({ className, alt, ...rest }: ImageProps) {
  return (
    <Image
      className={clsx(
        className,
        "rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      )}
      alt={alt}
      width={120}
      height={70}
      {...rest}
    />
  );
}
