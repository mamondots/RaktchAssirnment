import { ImLocation } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";

const FindLacation = () => {
  return (
    <div className="lg:px-48 md:px-20 sm:px-18 px-12 pb-12">
      <div className="bg-[#fff] rounded px-8 border py-12">
        <form>
          <div className="grid lg:grid-cols-4 gap-2">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-1 text-md font-medium">
                <span className="text-[#4DA528]">
                  <ImLocation />
                </span>
                <span className="text-[#5e5e5e]">Destination</span>
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
                <span className="text-[#4DA528]">
                  <IoIosTimer />
                </span>
                <span className="text-[#5e5e5e]">Durating</span>
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
                <span className="text-[#4DA528]">
                  <FaPeopleLine />
                </span>
                <span className="text-[#5e5e5e]">Type</span>
              </label>
              <select className="border border-[#4da52836] px-4 py-2 outline-none rounded">
                <option value="">Group-tour</option>
                <option value="">Family-tour</option>
                <option value="">Single-tour</option>
                <option value="">Official-tour</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <input
                className="py-2 px-4 text-center"
                type="submit"
                value="Find Lacation"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindLacation;
