import React from "react";
import Image from "next/image";

export const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-4 w-full pb-2 p-4">
        <Image
          src="/avatar.jpg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full mr-3"
        />
        <div className="gap-1 flex flex-col">
          <p className="font-semibold text-sm">Khaled Mokhtar</p>
          <p className="text-xs text-gray-500">khaledmokhtar.km@gmail.com</p>
          <div className="flex gap-2 text-xs text-gray-600 mt-1">
            <div className="flex gap-1 items-center">
              <Image src="/user.svg" alt="Profile" width={15} height={15} />
              <span>1</span>
            </div>
            <div className="flex gap-1 items-center">
              <Image src="/gender.svg" alt="Profile" width={15} height={15} />
              <span>male</span>
            </div>
            <span>⭐ 1,700</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded-full">Silver</span>
          </div>
        </div>
      </div>
    </>
  );
};
