"use client";
import imageOne from "@/assets/testimonial1.jpg";
import imageTwo from "@/assets/testimonial2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { testimonalData } from "@/utlis/testimonalData";
import "./Testimonal.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-[#4DA528] font-semibold py-2">TESTIMONIAL</p>
        <h2 className="lg:text-4xl lg:w-2/4  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
          What Our{" "}
          <span className="text-[#4DA528] leading-[3rem]">Customer</span> Say Us
        </h2>
      </div>

      <div className="py-16  lg:grid lg:grid-cols-2 gap-20">
        <div className="relative hidden lg:block">
          <div>
            <Image
              className="border-8 border-[#4da5289c] shadow-slate-200 shadow-xl p-8 z-50 absolute"
              src={imageOne}
              alt="process-image"
              width={300}
              height={300}
            ></Image>
          </div>

          <div>
            <Image
              className="border border-[#4da52848] shadow-slate-200 shadow-xl p-8 absolute top-20 right-0"
              src={imageTwo}
              alt="process-image"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>

        <div className="backImg w-full lg:mt-12">
          <Slider {...settings}>
            {testimonalData.map((data) => (
              <div key={data.id}>
                <div className="flex justify-center items-center lg:items-start flex-col">
                  <Image
                    className="rounded-full"
                    src={data.img}
                    alt="testimonal"
                    width={70}
                    height={70}
                  ></Image>
                  <div className="py-4 flex justify-center items-center lg:items-start flex-col lg:text-start text-center">
                    <h2 className="text-xl font-semibold text-[#4b4a4a]">
                      {data.name}
                    </h2>
                    <p className="font-medium text-[#636262]">{data.title}</p>
                    <p className="py-4 text-lg text-[#7a7a7a]">
                      {data.description}
                    </p>

                    <div className="bg-[#4DA528] text-2xl flex items-center justify-center w-[60px] h-[60px] text-[#fff] rounded">
                      <FaQuoteRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
