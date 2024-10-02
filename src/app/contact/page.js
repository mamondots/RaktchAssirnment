import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import "./index.css";

import FormValidition from "@/utlis/FormValidition/FormValidition";

const page = () => {
  return (
    <div>
      <div className="relative upBanner py-20">
        <div className="flex items-center justify-center flex-col z-50 relative">
          <h2 className="text-[#fff] lg:text-6xl md:4xl text-2xl font-bold tracking-wider">
            Contact Us
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
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 lg:px-20 md:px-20 sm:px-18 px-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6">
          <div className="border border-[#4da5284d] rounded shadow-md flex items-center justify-center flex-col py-6">
            <p className="border p-2 text-6xl text-[#4DA528]">
              <GiRotaryPhone />
            </p>
            <h2 className="text-xl font-bold py-2">Call Now</h2>

            <div className="text-base text-[#686868]">
              <p>+8801746770324</p>
              <p>+8801913444605</p>
            </div>
          </div>

          <div className="border border-[#4da5284d] rounded shadow-md flex items-center justify-center flex-col py-6">
            <p className="border p-2 text-6xl text-[#4DA528]">
              <MdEmail />
            </p>
            <h2 className="text-xl font-bold py-2">Email Address</h2>

            <div className="text-base text-[#686868] text-center">
              <p>almamon757@gmail.com</p>
              <p>admin658@gmail.com</p>
            </div>
          </div>

          <div className="border border-[#4da5284d] rounded shadow-md flex items-center justify-center flex-col py-6">
            <p className="border p-2 text-6xl text-[#4DA528]">
              <IoLocationSharp />
            </p>
            <h2 className="text-xl font-bold py-2">Location</h2>

            <div className="text-base text-[#686868] text-center">
              <p>Mirpur-1, Road No:20 House No:02</p>
              <p>Dhaka,Bamgladesh</p>
            </div>
          </div>
        </div>

        <FormValidition></FormValidition>
      </div>

      <div className="">
        <iframe
          className="w-full h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70032252558!2d90.34355868346047!3d23.794581992123334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sde!4v1724766713222!5m2!1sen!2sde"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
