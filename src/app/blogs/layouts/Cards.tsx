import React from "react";
import { EvervaultCard } from "@/app/components/blogs/Card";

export function Cards() {
  return (
    <div className="flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <EvervaultCard />

    </div>
  );
}
