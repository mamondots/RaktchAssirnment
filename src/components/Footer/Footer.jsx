import Image from "next/image";
import React from "react";
import image from "@/assets/ready.png";
import image2 from "@/assets/vector4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12 bg-[#262626]">
      <div className="bg-[#4DA528] rounded px-8 py-6 hidden lg:flex items-center justify-between flex-wrap lg:flex-nowrap">
        <div className="flex items-center gap-8">
          <Image
            className=""
            src={image}
            alt="photo"
            width={80}
            height={80}
          ></Image>

          <div>
            <h2 className="lg:text-3xl md:text-3xl text-xl capitalize font-semibold text-[#fff]">
              Ready to adventure and enjoy natural
            </h2>
            <p className="text-md text-[#ffffff62] py-1">
              Lorem ipsum dolor sit amet, consectetur notted adipisicin
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Image
            className=""
            src={image2}
            alt="photo2"
            width={150}
            height={150}
          ></Image>

          <button className="px-6 py-4 bg-[#fff] uppercase font-semibold text-[#4DA528] rounded cursor-pointer hover:bg-[#FF970D] hover:text-[#fff] duration-300">
            Let,s get started
          </button>
        </div>
      </div>

      <div className="lg:py-6 py-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-6 border-b border-[#ffffff4b]">
        <div className="text-[#fff]">
          <h2 className="text-xl font-bold">Raktch</h2>
          <p className="py-2 text-[#b9b8b8]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            natus dolorum quidem ab voluptatem minus.
          </p>

          <div className="flex items-center gap-2 py-4 ">
            <p className="p-2 border border-[#fff4] rounded text-sm text-[#ffffffa9] cursor-pointer hover:text-[#fff] hover:bg-[#4DA528] duration-300">
              <FaFacebookF />
            </p>
            <p className="p-2 border border-[#fff4] rounded text-sm text-[#ffffffa9] cursor-pointer hover:text-[#fff] hover:bg-[#4DA528] duration-300">
              <FaInstagram />
            </p>
            <p className="p-2 border border-[#fff4] rounded text-sm text-[#ffffffa9] cursor-pointer hover:text-[#fff] hover:bg-[#4DA528] duration-300">
              <FaTwitter />
            </p>
            <p className="p-2 border border-[#fff4] rounded text-sm text-[#ffffffa9] cursor-pointer hover:text-[#fff] hover:bg-[#4DA528] duration-300">
              <FaLinkedinIn />
            </p>
          </div>
        </div>

        <div className="text-[#fff] lg:flex lg:flex-col  lg:items-center">
          <h2 className="font-semibold text-lg">Services Req</h2>
          <div className="py-2 space-y-1 text-[#ffffffa9] lg:ml-[-50px] cursor-pointer">
            <p className="hover:text-[#4DA528] duration-300">About Us</p>
            <p className="hover:text-[#4DA528] duration-300">Tour</p>
            <p className="hover:text-[#4DA528] duration-300">Blogs</p>
            <p className="hover:text-[#4DA528] duration-300">Contact</p>
            <p className="hover:text-[#4DA528] duration-300">Team</p>
          </div>
        </div>

        <div className="text-[#fff]">
          <h2 className="font-semibold text-lg">Official Info</h2>
          <div className="py-2 space-y-1 text-[#ffffffa9] cursor-pointer">
            <p className="hover:text-[#4DA528] duration-300">
              France Experience
            </p>
            <p className="hover:text-[#4DA528] duration-300">
              Ancient Rome Discover
            </p>
            <p className="hover:text-[#4DA528] duration-300">
              Get Into Naxos Island
            </p>
            <p className="hover:text-[#4DA528] duration-300">
              Vietnam Island Experience
            </p>
            <p className="hover:text-[#4DA528] duration-300">Travel City</p>
          </div>
        </div>

        <div className="text-[#fff]">
          <h2 className="font-semibold text-lg">Official Info</h2>

          <div className="py-2">
            <div className="py-2 flex items-center justify-between px-4 border rounded">
              <input
                className="bg-transparent outline-none"
                type="email"
                placeholder="Enter Email Address"
              />
              <p className="text-lg">
                <HiOutlineMail />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <p className="text-[#ffffff7a] text-sm">
          Copyright © 2024 by almamon757@gmail.com, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
