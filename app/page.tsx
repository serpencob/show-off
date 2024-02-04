"use client";

import Content from "@/app/ui/sections";
import Header from "@/app/ui/sections/header";
import { FocusContextProvider } from "@/app/ui/utils/focusContext";

export default function Home() {
  return (
    <FocusContextProvider>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Content />
      </div>
    </FocusContextProvider>
  );
}
