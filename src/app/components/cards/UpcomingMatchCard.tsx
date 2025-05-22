import Image from "next/image";

export default function UpcomingMatchCard() {
  return (
    <div className="px-4">
      <h2 className=" text-sm text-gray-700 mb-2">Upcoming Match</h2>
      <div className="border rounded-xl shadow-sm p-3 ">
        <Image
          src="/radar.png"
          alt="Profile"
          width={25}
          height={25}
          className="mb-1"
        />
        <div className="bg-[#F2F2F2] py-1 mb-2 text-xs text-center text-[#7582A7] font-semibold">
          Doubles
        </div>
        <div className="text-center text-gray-400 text-xs mt-2">
          Score not available
        </div>
        <div className="mt-1 grid grid-cols-3 gap-3 text-[#7582A7] text-sm items-stretch">
          <div className="space-y-1">
            <p className="border-b-2 pb-1 border-[#CCCCCC]">Khaled Mokhtar</p>
            <p>Robby Sugada</p>
          </div>
          <div className="flex justify-center">
            <div className="border-2 border-[#1B2C5F] h-full"></div>
          </div>
          <div className="space-y-1 text-right">
            <p className="border-b-2 pb-1 border-[#CCCCCC]">Iyas Pras</p>
            <p>Jojo Thomas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
