import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";
import About from "@/components/About/About";
import Blogs from "@/components/Blogs/Blogs";
const page = () => {
  return (
    <div>
      <div className="relative upBanner py-20">
        <div className="flex items-center justify-center flex-col z-50 relative">
          <h2 className="text-[#fff] lg:text-6xl md:4xl text-2xl font-bold tracking-wider">
            About Us
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
              About Us
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 mt-12">
        <About></About>
      </div>

      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default page;
