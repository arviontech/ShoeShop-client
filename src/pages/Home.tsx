import Banner from "@/components/Home/Banner";
import BestSellers from "@/components/Home/BestSellers";
import CategoryPage from "@/components/Home/CategoryPage";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

import JustLanded from "@/components/Home/JustLanded";
import PickedCollection from "@/components/Home/PickedCollection";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <CategoryPage/>
      <JustLanded/>
      <PickedCollection/>
      <BestSellers/>
      <FeaturedProducts/>
    </div>
  );
};

export default Home;
