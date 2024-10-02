import { processData } from "@/utlis/processData";
import Image from "next/image";
import React from "react";

const HowWorks = () => {
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12 py-8 mt-8">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-[#4DA528] font-semibold py-2">HOW IT WORKS</p>
        <h2 className="lg:text-4xl lg:w-2/4  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
          Let’s Find Your Dream{" "}
          <span className="text-[#4DA528] leading-[3rem]">Destination</span>{" "}
          Make With Enjoy
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 py-8 mt-8">
        {processData.map((data) => (
          <div className="group cursor-pointer" key={data.id}>
            <div className="flex items-center justify-center flex-col group-hover:mt-[-12px] duration-300">
              <div className="relative">
                <Image
                  className=""
                  src={data.img}
                  alt="process-image"
                  width={180}
                  height={180}
                ></Image>
                <p className="w-[40px] h-[40px] flex items-center justify-center bg-[#4DA528] group-hover:bg-[#FBAD17] duration-300 text-[#fff]  rounded-full font-bold absolute top-[46%] right-[-10%]">
                  0{data.id}
                </p>
              </div>

              <div className="flex items-center justify-center flex-col py-2 text-center">
                <h2 className="text-xl font-bold text-[#262626] py-2">
                  {data.title}
                </h2>
                <p className="text-[#616060] py-1">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
