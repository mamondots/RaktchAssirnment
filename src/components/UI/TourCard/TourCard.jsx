import React from "react";
import photo from "@/assets/demoPhoto.jpg";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import Link from "next/link";

const TourCard = () => {
  return (
    <div className="cursor-pointer group">
      <Link href={`/tour/${1}`}>
        <div className="relative overflow-hidden">
          <Image
            className="rounded group-hover:scale-110 duration-300 overflow-hidden"
            src={photo}
            alt="logo"
            width={700}
            height={700}
          ></Image>
          <div className="top-4 px-4 absolute flex items-center justify-between w-full">
            <p className="bg-[#14B0C3] text-[#fff] font-semibold px-4 py-1 rounded tracking-widest text-[12px]">
              Featured
            </p>
            <div className="flex items-center gap-2 text-[#fff]">
              <p className="flex items-center gap-1 bg-[#26262681] px-2 py-1 text-sm rounded">
                <span>
                  <FaCamera />
                </span>{" "}
                <span>5</span>
              </p>
              <p className="flex items-center gap-1 bg-[#26262681] px-2 py-1 text-sm rounded">
                <span>
                  <MdOutlineVideoLibrary />
                </span>{" "}
                <span>3</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative px-2 py-2 bg-[#ffffff] rounded-xl mt-[-12px]">
          <div className="flex items-center justify-between py-2">
            <h2 className="flex items-center gap-2">
              <span className="text-[#4DA528]">
                <BiSolidMap />
              </span>{" "}
              <span className="text-sm font-medium text-[#646464] tracking-wider">
                United States USA
              </span>
            </h2>
            <p className="top-[-16px]  right-5 absolute bg-[#fff] text-[12px] tracking-widest font-semibold text-[#5f5f5f] rounded-md px-4 py-2 group-hover:bg-[#4DA528] group-hover:text-[#fff] duration-300">
              Bestselle
            </p>
          </div>
          <div>
            <h2 className="text-lg text-[#4b4a4a] font-medium hover:text-[#4DA528] cursor-pointer duration-300">
              Days and 6 nights From Moscow
            </h2>
            <div className="py-3 flex items-center gap-2">
              <Rating style={{ maxWidth: 90 }} value={5} readOnly />
              <p className="text-[#4b4a4a] font-medium text-sm">(1 Review)</p>
            </div>
          </div>

          <div className="flex items-center gap-6 border-b pb-4">
            <p className="flex items-center gap-1 text-[#4b4a4a] font-medium">
              <span className="text-[#4DA528] text-xl">
                <IoIosTimer />
              </span>{" "}
              <span>5 days</span>
            </p>
            <p className="flex items-center gap-1 text-[#4b4a4a] font-medium">
              <span className="text-[#4DA528] text-xl">
                <AiOutlineUserAdd />
              </span>{" "}
              <span>12 Person</span>
            </p>
          </div>

          <div className="py-2 mt-1 flex items-center justify-between">
            <p className="text-[#4b4a4a] flex gap-2 items-center">
              From <span className="text-lg text-[#4DA528]">$169.00</span>{" "}
              <span className="text-sm">$199.00</span>
            </p>
            <p className="text-[#4DA528]">
              <FaRegBookmark />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
