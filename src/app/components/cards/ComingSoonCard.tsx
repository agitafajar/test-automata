import React from "react";
import Image from "next/image";

export const ComingSoonCard = () => {
  return (
    <div className="text-[#7582A7] ">
      <div className="h-full w-full items-center justify-center flex flex-col gap-4 px-12 py-8 text-center">
        <Image src="/coming-soon.svg" alt="Profile" width={400} height={400} />
        <span className="text-lg font-semibold">COMING SOON</span>
        <span className="text-sm">
          We’re building a new page packed with curated merchants, exclusive
          deals, and limited‑time promos just for you. Stay tuned !
        </span>
      </div>
    </div>
  );
};
