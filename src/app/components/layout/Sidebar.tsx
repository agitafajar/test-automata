import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Profile } from "../cards/Profile";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "League", path: "/league" },
    { label: "Players", path: "/players" },
    { label: "Promotions", path: "/promotions" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transform`}
    >
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div className="absolute left-0 top-0 bottom-0 w-[90%] max-w-sm bg-white shadow-lg z-50 overflow-y-auto">
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        <div className="px-4 pb-8">
          <Profile />
          <nav className="space-y-4 mt-6 text-lg font-semibold text-[#1E2A78]">
            {menuItems.map(({ label, path }) => {
              const isActive = pathname === path;
              return (
                <Link key={path} href={path}>
                  <p
                    className={`block py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-[#FD08FD]"
                        : "text-[#1E2A78] hover:bg-gray-100"
                    }`}
                    onClick={onClose}
                  >
                    {label}
                  </p>
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 space-y-3 text-sm text-gray-700">
            <p>About NETS</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Merchant Policy</p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            © 2024. NETS League inc.
          </p>
        </div>
      </div>
    </div>
  );
}
