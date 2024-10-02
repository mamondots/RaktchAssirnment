import { placesData } from "@/utlis/placesData";
import Image from "next/image";

const NearBy = () => {
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12 py-8">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-[#4DA528] font-semibold py-2">EXPLORE NEARBY</p>
        <h2 className="lg:text-4xl lg:w-2/4  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
          Discover Great{" "}
          <span className="text-[#4DA528] leading-[3rem]">Places</span> Where
          You Live
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 py-8 mt-8">
        {placesData.map((data) => (
          <div
            className="group cursor-pointer border hover:border-[#4DA528] duration-200 rounded-xl"
            key={data.id}
          >
            <div className="flex items-center justify-center flex-col group-hover:mt-[-40px] duration-300 py-6">
              <Image
                className="group-hover:border-2 group-hover:border-[#4DA528] rounded-full duration-300"
                src={data.img}
                alt="process-image"
                width={100}
                height={100}
              ></Image>

              <div className="flex items-center justify-center flex-col py-2 text-center">
                <h2 className="text-xl font-semibold capitalize text-[#262626] py-2">
                  {data.title}
                </h2>
                <p className="text-[#616060] text-sm">
                  {data.time} Minutes Drive
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearBy;
