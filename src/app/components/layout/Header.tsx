"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/league":
        return "League";
      case "/players":
        return "Players";
      case "/promotions":
        return "Promotions";
      default:
        return "Page";
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b bg-[#2E55CE]">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Profile" width={130} height={70} />
        </Link>
        <div className="flex gap-3">
          <Image
            src="/notif.png"
            alt="Notif"
            width={35}
            height={22}
            className="cursor-pointer"
          />
          <Image
            src="/promo.png"
            alt="Promo"
            width={35}
            height={22}
            className="cursor-pointer"
          />
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer"
          >
            <IoMenu size={22} className="text-white" />
          </button>
        </div>
      </header>

      <div className="bg-[#C6FB0F] px-4 py-2 font-semibold">
        {getPageTitle(pathname)}
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
