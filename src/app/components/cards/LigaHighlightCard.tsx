export default function LigaHighlightCard() {
  return (
    <>
      <div className="bg-[#F0C74B] flex p-4 text-sm text-black relative justify-between items-center pb-8">
        <div className="flex-col gap-1 flex">
          <p className="font-bold text-sm ">Liga 2025</p>
          <p className="text-xs text-[#AF8403]">Double & Team Available</p>
          <p className="text-xs">5 Mei 2025 – 10 Mei 2025</p>
          <div className="font-bold text-xs mt-4">
            Tournament Points
            <span className="bg-white font-light text-xs rounded p-2 ml-4 ">
              ⭐ 500
            </span>
          </div>
        </div>

        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full h-10 cursor-pointer">
          Register Now →
        </button>
      </div>
    </>
  );
}
