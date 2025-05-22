/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

type Player = {
  id: number;
  name: string;
  image: string;
  points: number;
  delta: number;
};

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [search, setSearch] = useState("");
  const [activePlayerId, setActivePlayerId] = useState<number>(1);
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      setIsLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=1000");
      const data = await res.json();

      const mapped = data.results.map((user: any, index: number) => ({
        id: index + 1,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
        points: 1700 - index * 5,
        delta: index === 0 ? 2 : 0,
      }));

      setPlayers(mapped);
      setIsLoading(false);
    }

    fetchPlayers();
  }, []);

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const visiblePlayers = filtered.slice(10, visibleCount);

  const activePlayer =
    filtered.find((p) => p.id === activePlayerId) || filtered[0];

  useEffect(() => {
    if (!players.length) return;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - 100) {
        setVisibleCount((prev) => Math.min(prev + 10, filtered.length));
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filtered.length, players.length]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="relative mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search Player"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(20);
          }}
          className="w-full border rounded-lg py-2 px-4 pr-10 text-sm mr-3 border-gray-400"
        />
        <IoSearch className="absolute right-10 top-2.5 text-gray-400 w-5 h-5" />
        <Image src="/filter.png" alt="Filter" width={20} height={20} />
      </div>

      {activePlayer && (
        <div className="relative mb-6 -mx-4">
          <img
            src={activePlayer.image}
            alt={activePlayer.name}
            className="w-full h-[370px] object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white flex gap-4 items-center">
            <div className="text-6xl font-bold">{activePlayer.id}</div>
            <div>
              <div className="text-2xl">{activePlayer.name}</div>
              <div className="flex items-center gap-4">
                <div className="mt-1 bg-gray-300 text-black px-2 rounded-lg text-sm flex items-center gap-1">
                  Points
                  <span className="text-pink-500 font-semibold text-lg">
                    {activePlayer.points.toFixed(1)}
                  </span>
                </div>
                {activePlayer.delta > 0 && (
                  <span className="text-green-400 text-xs flex gap-2">
                    + {activePlayer.delta}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-between mb-6 flex-wrap">
        {filtered.slice(0, 10).map((player) => (
          <button
            key={player.id}
            className={`w-8 h-8 text-sm rounded-md font-medium cursor-pointer ${
              player.id === activePlayerId
                ? "bg-[#2E55CE] text-white"
                : "bg-white text-gray-400"
            }`}
            onClick={() => setActivePlayerId(player.id)}
          >
            {player.id}
          </button>
        ))}
      </div>

      <div>
        {visiblePlayers.map((player, index) => {
          const globalIndex = index + 10;
          const isShortPadding = globalIndex >= 20;

          return (
            <div
              key={player.id}
              className="flex items-center justify-between rounded-lg bg-[#F2F2F2] mb-2"
            >
              <div
                className={`flex items-center p-3 ${
                  isShortPadding ? "py-3 gap-4" : "py-10 gap-16"
                }`}
              >
                <div
                  className={`text-[#2E55CE] w-6 ${
                    isShortPadding ? "text-2xl" : "text-4xl"
                  }`}
                >
                  {player.id}
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={player.image}
                    alt={player.name}
                    className={`rounded-full h-10 w-10 mr-2 ${
                      isShortPadding ? "" : "hidden"
                    }`}
                  />
                  <div>
                    <div className="font-semibold mb-1">{player.name}</div>
                    <div className="flex items-center gap-4">
                      <div className="mt-1 bg-gray-300 text-black px-2 rounded-lg text-xs flex items-center gap-1">
                        Points
                        <span className="text-pink-500 font-semibold text-lg">
                          {player.points.toFixed(1)}
                        </span>
                      </div>
                      {player.delta > 0 && (
                        <span className="text-green-400 text-xs flex gap-2">
                          + {player.delta}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={player.image}
                alt={player.name}
                className={`rounded-r-lg h-[140px] w-[120px] ${
                  isShortPadding ? "hidden" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
