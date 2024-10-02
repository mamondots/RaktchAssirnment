import Image from "next/image";
import React from "react";
import image from "@/assets/tours.jpg";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";
import Link from "next/link";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbGridDots } from "react-icons/tb";
import TourCard from "@/components/UI/TourCard/TourCard";

const page = () => {
  return (
    <div className="">
      <div className="relative upBanner py-20">
        <div className="flex items-center justify-center flex-col z-50 relative">
          <h2 className="text-[#fff] lg:text-6xl md:4xl text-2xl font-bold tracking-wider">
            Archieve Tour
          </h2>
          <div className="flex items-center lg:gap-4 gap-2 py-8">
            <Link
              href="/"
              className="lg:text-xl md:text-xl text-lg font-medium text-[#fff] cursor-pointer hover:text-[#4DA528] duration-300"
            >
              Home
            </Link>
            <p className="text-xl font-semibold text-[#fff]">
              <IoIosArrowForward />
            </p>
            <p className="lg:text-xl md:text-xl text-lg font-medium text-[#4DA528]">
              Archieve Tour
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 md:px-20 sm:px-18 px-12 py-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-lg font-medium">
            Showing <span className="text-[#4DA528]">12</span> of 21 Results
          </h2>

          <div className="flex items-center justify-center gap-2 lg:w-1/3 w-full">
            <form className="w-full">
              <input
                className="border border-[#4da52833] px-2 py-2 outline-none w-full"
                type="text"
                placeholder="Search here ..."
              ></input>
            </form>
            <p className="p-2 border border-[#4da52833] text-[#fff] rounded cursor-pointer text-xl bg-[#4DA528] text-[">
              <TfiMenuAlt />
            </p>
            <p className="p-2 border border-[#4da52833] text-[#4da528e5] text-xl hover:bg-[#4DA528] hover:text-[#fff] duration-300 cursor-pointer rounded">
              <TbGridDots />
            </p>
          </div>
        </div>

        <div className=" py-12 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
        </div>
      </div>
    </div>
  );
};

export default page;
