"use client";

import Header from "./ui/sections/header";
import Content from "@/app/ui/sections";
import { FocusContextProvider } from "./ui/utils/focusContext";

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
