import "./index.css";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { TbLocationPause } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import photo from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import BookValidation from "@/utlis/BookValidation/BookValidation";

const page = () => {
  return (
    <div>
      <div className="relative bannerId py-20"></div>
      <div className="lg:px-20 md:px-20 sm:px-18 px-8">
        <div className="bg-[#fff]  px-2 overflow-y-auto rounded-full py-6 border mt-[-25px] z-10 relative flex items-center justify-between lg:px-8">
          <p className="lg:font-semibold lg:base md:text-base sm:text-base text-[12px] flex items-center gap-1 hover:text-[#4DA528] duration-300 cursor-pointer">
            <span className="text-[#4DA528]">
              <HiMiniInformationCircle />
            </span>
            <span>Information</span>
          </p>
          <p className="lg:font-semibold lg:base md:text-base sm:text-base text-[12px] flex items-center gap-1 hover:text-[#4DA528] duration-300 cursor-pointer">
            <span className="text-[#4DA528]">
              <LiaSearchLocationSolid />
            </span>
            <span>Tour Planning</span>
          </p>
          <p className="lg:font-semibold lg:base md:text-base sm:text-base text-[12px] flex items-center gap-1 hover:text-[#4DA528] duration-300 cursor-pointer">
            <span className="text-[#4DA528]">
              <TbLocationPause />
            </span>
            <span>Lacation Sharing</span>
          </p>
          <p className="lg:font-semibold hidden lg:flex md:flex items-center gap-1 hover:text-[#4DA528] duration-300 cursor-pointer">
            <span className="text-[#4DA528]">
              <MdOutlineReviews />
            </span>
            <span>Reviews</span>
          </p>
          <p className="lg:font-semibold hidden lg:flex md:flexitems-center gap-1 hover:text-[#4DA528] duration-300 cursor-pointer">
            <span className="text-[#4DA528]">
              <GrGallery />
            </span>
            <span>Shot Gallery</span>
          </p>
        </div>

        <div className="py-4 mt-8">
          <div className="">
            <p className="px-6 w-[120px] py-1 rounded text-semibold text-[#fff] bg-[#FF494F] flex ">
              Featured
            </p>
            <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold py-2 mt-4">
              Africa – Amazing African Safari
            </h2>

            <div className="flex flex-wrap items-center lg:gap-6 gap-4 py-2 pb-2">
              <p className="flex items-center gap-1 text-[#4b4a4a] lg:font-medium">
                <span className="text-[#4DA528] lg:text-xl md:text-xl sm:text-lg text-base">
                  <IoIosTimer />
                </span>{" "}
                <span>5 days</span>
              </p>
              <p className="flex items-center gap-1 text-[#4b4a4a] lg:font-medium">
                <span className="text-[#4DA528] lg:text-xl md:text-xl sm:text-lg text-base">
                  <AiOutlineUserAdd />
                </span>{" "}
                <span>12 Person</span>
              </p>

              <p className="flex items-center gap-1 text-[#4b4a4a] lg:font-medium">
                <span className="text-[#4DA528] lg:text-xl md:text-xl sm:text-lg text-base">
                  <FaMapMarkerAlt />
                </span>{" "}
                <span>1421 San Pedro St, Los Angeles, CA</span>
              </p>
            </div>

            <div className="pb-6 flex items-center gap-2">
              <Rating style={{ maxWidth: 90 }} value={5} readOnly />
              <p className="text-[#4b4a4a] font-medium text-sm">(1 Review)</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <Image src={photo} alt="photo" width={700} height={700}></Image>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <Image src={photo2} alt="photo" width={700} height={700}></Image>
              <Image src={photo3} alt="photo" width={700} height={700}></Image>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 py-8">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold">Description:</h2>
              <p className="my-4 pb-4 text-[#4e4e4e]">
                Description It is a long established fact that a reader will be
                distrac by any websites look for ways mornings of spring prevent
                AdBlock from blocking annoying ads. As a result, we have focused
                on improving our funct so that we can overcome these anti-ad
                blocking attempts. Of course, you can help us continue improve
                our ad blocking ability by reporting any time you run into a
                website that won t allow you to block the readable content of a
                page when looking at its layout. It is a long established fact
              </p>

              <h2 className="text-xl font-semibold">Advance Facilities</h2>
              <p className="py-4 text-[#4e4e4e]">
                Leave your guidebooks at home and dive into the local cultures
                that make each destination so special. We ll connect you with
                our exclusive experiences. Each trip is carefully crafted to let
                enjoy your vacation.
              </p>

              <h2 className="text-xl font-semibold">What to Expect</h2>
              <p className="py-4 text-[#4e4e4e]">
                Leave your guidebooks at home and dive into the local cultures
                that make each destination so special. We ll connect you with
                our exclusive experiences. Each trip is carefully crafted to let
                enjoy your vacation.
              </p>

              <div className="space-y-2 font-medium">
                <p className="flex items-center gap-1">
                  <span className="text-[#4DA528] text-xl">
                    <GoDotFill />
                  </span>{" "}
                  <span>View the City Walls</span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-[#4DA528] text-xl">
                    <GoDotFill />
                  </span>{" "}
                  <span>Hiking in the forest</span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-[#4DA528] text-xl">
                    <GoDotFill />
                  </span>{" "}
                  <span>Discover the famous view point “The Lark”</span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-[#4DA528] text-xl">
                    <GoDotFill />
                  </span>{" "}
                  <span>Sunset on the cruise</span>
                </p>
              </div>
            </div>

            <div className="border p-5 lg:w-1/3">
              <h2 className="text-sm text-[#686868]">
                From:{" "}
                <span className="text-xl font-semibold text-[#4DA528]">
                  $0,00
                </span>
              </h2>

              <div className="py-8">
                <BookValidation></BookValidation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
