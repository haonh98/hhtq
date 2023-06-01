import React from "react";

import avatar from "../../assets/avatar.png";
import {
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export const TopHeader = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-[1200px] min-w-[390px] mx-auto flex items-center justify-between px-4 py-[10px] md:px-6 md:py-[22px]">
        <a
          href="#"
          className="text-rose-600 flex items-center text-xl leading-[22px]"
        >
          <RocketLaunchIcon className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]" />
          <p className="ml-2 text-xs md:text-base">
            <span className="font-normal">hoạt hình</span>
            <br />
            <b className="uppercase font-bold">Trung Quốc</b>
          </p>
        </a>
        <div className="hidden relative md:bg-rose-600 md:flex md:rounded-3xl">
          <input
            className="bg-rose-600 w-[420px] border-none outline-none py-3 pl-6 pr-14 rounded-3xl text-white text-base font-normal placeholder-white"
            type="text"
            placeholder="Tìm kiếm"
          />
          <button className="absolute h-6 w-6 right-6 text-white top-[10px]">
            <MagnifyingGlassIcon />
          </button>
        </div>
        <a href="#" className="hidden md:flex items-center text-rose-600">
          <span className="font-semibold text-base">Hảo Nguyễn</span>
          <img className="h-11 w-11 rounded-full ml-2" src={avatar} alt="" />
        </a>
        <div className="md:hidden flex items-center space-x-2 text-rose-600">
          <button>
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button>
            <Bars3Icon className="h-[26px] w-[26px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
