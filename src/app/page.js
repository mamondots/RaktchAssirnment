import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Blogs from "@/components/Blogs/Blogs";
import FeaturedTour from "@/components/FeaturedTour/FeaturedTour";
import FindLacation from "@/components/FindLacation/FindLacation";
import HowWorks from "@/components/HowWorks/HowWorks";
import NearBy from "@/components/NearBy/NearBy";
import Testimonal from "@/components/Testimonal/Testimonal";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FindLacation></FindLacation>
      <About></About>
      <FeaturedTour></FeaturedTour>
      <HowWorks></HowWorks>
      <NearBy></NearBy>
      <Testimonal></Testimonal>
      <Blogs></Blogs>
    </div>
  );
}
