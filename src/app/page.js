import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import FeaturedTour from "@/components/FeaturedTour/FeaturedTour";
import FindLacation from "@/components/FindLacation/FindLacation";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FindLacation></FindLacation>
      <About></About>
      <FeaturedTour></FeaturedTour>
    </div>
  );
}
