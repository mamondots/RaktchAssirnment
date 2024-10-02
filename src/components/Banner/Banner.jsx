"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { bannerData } from "@/utlis/bannerData";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(bannerData);
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <div key={data.id}>
            <div className="relative py-60">
              <div className="z-10 ">
                <Image
                  src={data.img}
                  alt="baner"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>

              <div
                className=" absolute
                inset-0
                bg-black
                bg-opacity-70
                flex
                flex-col
                justify-center
                items-center
                text-white
                py-20 md:px-12 sm:px-10 px-6"
              >
                <p className="py-2 capitalize text-[#4DA528] font-semibold">
                  {data.subTitle}
                </p>
                <h2 className="lg:text-4xl md:4xl 2xl font-semibold capitalize pb-2 text-center">
                  {data.title}
                </h2>
                <p className="lg:w-3/4 text-center py-4 text-[#aaa8a8]">
                  {data.description}
                </p>

                <div className="flex lg:flex-row md:flex-row flex-col gap-6 py-6 group">
                  <div className="bg-[#4DA528] px-6 py-5 gap-1  rounded  hover:bg-[#FBAD17] cursor-pointer duration-300 flex items-center">
                    <button className="text-sm font-semibold uppercase tracking-wider">
                      let&apos;s get started
                    </button>
                    <p className="group-hover:text-[#fff]">
                      <IoMdArrowForward />
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <button className="text-lg font-medium hover:text-[#FBAD17] duration-300">
                      Who we are
                    </button>
                    <p className="text-lg text-[#4DA528]">
                      <IoIosArrowDroprightCircle />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
