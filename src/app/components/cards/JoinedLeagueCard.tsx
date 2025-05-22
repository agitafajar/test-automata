export default function JoinedLeagueCard() {
  return (
    <div className="px-4">
      <h2 className=" text-sm text-gray-700 mb-2 ">Joined League</h2>
      <div className="border rounded-xl pt-4 shadow-sm text-sm">
        <div className="px-4 pb-4">
          <p className="font-semibold  mb-1">Liga DuaRibuDuaEmpat</p>
          <p className="text-[#BAC0D3] mb-1">Season 1</p>
          <p className="text-[#7582A7] ">Jakarta – 03/2024 - 06/2024</p>
          <p className="text-green-600 font-semibold text-xs mt-2">
            ● Beginner
          </p>
        </div>
        <span className="w-full flex justify-end bg-[#F2F2F2] p-2 text-xs text-[#1B2C5F] font-light rounded-b-xl">
          You’re Joining This League
        </span>
      </div>
    </div>
  );
}
