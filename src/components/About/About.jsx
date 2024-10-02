import React from "react";
import firstImg from "@/assets/image-video.png";
import secondImg from "@/assets/enjoy.png";
import thirdImg from "@/assets/vali.png";
import ceoImg from "@/assets/ceo.jpg";
import nameImg from "@/assets/name.png";
import Image from "next/image";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { FaSwatchbook } from "react-icons/fa";
import { SiSemaphoreci } from "react-icons/si";

const About = () => {
  return (
    <div className="lg:px-20 md:px-20 sm:px-18 px-12 py-6">
      <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-14 gap-8">
        <div className="relative">
          <div>
            <Image src={firstImg} alt="logo" width={700} height={700}></Image>
          </div>
          <div className="absolute z-50 bottom-12 right-0">
            <Image src={secondImg} alt="logo" width={250} height={250}></Image>
          </div>
          <div className="absolute bottom-12 left-12">
            <Image src={thirdImg} alt="logo" width={200} height={200}></Image>
          </div>
        </div>
        <div>
          <p className="text-[#4DA528] font-semibold py-2">Explore the world</p>
          <h2 className="lg:text-4xl  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
            Great opportunity for{" "}
            <span className="text-[#4DA528]">adventure</span> & travels
          </h2>
          <p className="py-4 text-[#616161] ">
            Welcome to our softwear website! We are a professional and reliable
            softwear company that offers a wide range of softwear services to
          </p>

          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <p className="text-2xl text-[#4DA528] py-3">
                <VscWorkspaceUntrusted />
              </p>
              <h2 className="text-lg text-[#262626] capitalize tracking-wider font-semibold">
                Trusted travel guide
              </h2>
              <p className="py-2 text-[#5a5a5a]">
                Welcome to our softwearwebsit! company that offers a wide r
              </p>
            </div>
            <div>
              <p className="text-2xl text-[#4DA528] py-3">
                <FaSwatchbook />
              </p>
              <h2 className="text-lg text-[#262626] capitalize tracking-wider font-semibold">
                Pesonalized Trips
              </h2>
              <p className="py-2 text-[#5a5a5a]">
                Welcome to our softwear wesbit! company that offers a wide r
              </p>
            </div>
          </div>

          <div className="lg:flex md:flex items-center gap-8">
            <button className="px-8 py-4 tracking-wider uppercase rounded font-semibold  bg-[#4DA528] text-[#fff] hover:bg-[#FBAD17] cursor-pointer duration-300">
              <span>More about us</span>
            </button>

            <div className="flex items-center  gap-2 my-8">
              <div className="rounded-full">
                <Image
                  className="rounded-full border-4"
                  src={ceoImg}
                  alt="ceo"
                  width={60}
                  height={60}
                ></Image>
              </div>

              <div>
                <div>
                  <Image
                    src={nameImg}
                    alt="name"
                    width={80}
                    height={80}
                  ></Image>
                </div>
                <h2 className="font-semibold">Ceo & Founder</h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-[#4DA528] cursor-pointer">
              <span>
                <SiSemaphoreci />
              </span>
              <span>Checkout Beautiful Places Arround the World.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
