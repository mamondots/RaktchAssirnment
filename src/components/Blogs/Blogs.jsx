import { blogsData } from "@/utlis/blogsData";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const Blogs = () => {
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12 py-6">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-[#4DA528] font-semibold py-2">Explore the world</p>
        <h2 className="lg:text-4xl lg:w-3/5  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
          Latest news &{" "}
          <span className="text-[#4DA528] leading-[3rem]">articles</span> from
          the blog
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-4 mt-6">
        {blogsData.map((data) => (
          <div key={data.id}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  className="group-hover:scale-110 duration-300 overflow-hidden"
                  src={data.img}
                  alt="logo"
                  width={700}
                  height={700}
                ></Image>
                <p className="px-6 py-2 text-sm font-semibold text-[#fff] bg-[#4DA528] absolute bottom-0 tracking-widest">
                  {data.status}
                </p>
              </div>

              <div className="py-4 lg:px-2">
                <div className="flex gap-4">
                  <p className="flex justify-center items-center gap-1 lg:font-medium lg:text-base text-sm capitalize text-[#636363]">
                    <span className="lg:text-xl text-[#4DA528]">
                      <CiCalendarDate />
                    </span>{" "}
                    <span>{data.date}</span>
                  </p>
                  <p>-</p>
                  <p className="flex justify-center items-center gap-1 lg:font-medium lg:text-base text-sm capitalize text-[#636363]">
                    <span className="lg:text-xl text-[#4DA528]">
                      <FaRegCommentDots />
                    </span>{" "}
                    <span>comment (0{data.comment})</span>
                  </p>
                </div>
                <h2 className="text-xl font-semibold py-4 text-[#464646]">
                  {data.title}
                </h2>
                <p className="text-[#5c5b5b]">{data.description}</p>

                <div className="py-3">
                  <button className="flex items-center gap-2 capitalize text-[#535353] hover:text-[#4DA528] cursor-pointer duration-300">
                    <span className="font-semibold text-sm tracking-wider">
                      read more
                    </span>{" "}
                    <span>
                      <IoIosArrowDropright />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
