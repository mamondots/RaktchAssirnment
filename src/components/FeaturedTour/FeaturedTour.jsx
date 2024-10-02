import TourCard from "../UI/TourCard/TourCard";

const FeaturedTour = () => {
  return (
    <div className="lg:px-20 md:px-20 sm:px-18 px-12 py-6">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-[#4DA528] font-semibold py-2">Explore the world</p>
        <h2 className="lg:text-4xl lg:w-2/4  md:text-4xl text-2xl font-semibold text-[#262626] capitalize">
          Amazing Featured Tour{" "}
          <span className="text-[#4DA528] leading-[3rem]">Package</span> the
          world
        </h2>
      </div>

      <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <TourCard></TourCard>
        <TourCard></TourCard>
        <TourCard></TourCard>
        <TourCard></TourCard>
      </div>
      <div className="flex items-center justify-center">
        <button className="px-8 py-4 tracking-wider uppercase rounded font-semibold  bg-[#4DA528] text-[#fff] hover:bg-[#FBAD17] cursor-pointer duration-300">
          View all tour
        </button>
      </div>
    </div>
  );
};

export default FeaturedTour;
