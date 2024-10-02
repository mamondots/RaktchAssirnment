import { ImLocation } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";

const FindLacation = () => {
  return (
    <div className="lg:px-48 md:px-20 sm:px-18  pb-12 lg:mt-[-100px] relative z-50">
      <div className="bg-[#4DA528] rounded px-8 border py-4">
        <form>
          <div className="grid lg:grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-1 text-md font-medium">
                <span className="text-[#fff]">
                  <ImLocation />
                </span>
                <span className="text-[#f7f7f7]">Destination</span>
              </label>
              <select className="border border-[#4da52836] px-4 py-2 outline-none rounded">
                <option value="">Melborn-Australia</option>
                <option value="">HaNia-Vietnam</option>
                <option value="">Bangladesh-Japan</option>
                <option value="">India-China</option>
                <option value="">Tokyo-Korea</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-1 text-md font-medium">
                <span className="text-[#fff]">
                  <IoIosTimer />
                </span>
                <span className="text-[#fff]">Durating</span>
              </label>
              <select className="border border-[#4da52836] px-4 py-2 outline-none rounded">
                <option value="">2-4 days tour</option>
                <option value="">4-6 days tour</option>
                <option value="">6-8 days tour</option>
                <option value="">8-10 days tour</option>
                <option value="">10-12 days tour</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-1 text-md font-medium">
                <span className="text-[#fff]">
                  <FaPeopleLine />
                </span>
                <span className="text-[#fff]">Type</span>
              </label>
              <select className="border border-[#4da52836] px-4 py-2 outline-none rounded">
                <option value="">Group-tour</option>
                <option value="">Family-tour</option>
                <option value="">Single-tour</option>
                <option value="">Official-tour</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full mt-2 rounded">
            <input
              className="py-2 px-4 rounded text-center bg-[#fff] hover:bg-[#FBAD17] cursor-pointer duration-300 hover:text-[#fff] w-full"
              type="submit"
              value="Find Lacation"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindLacation;
