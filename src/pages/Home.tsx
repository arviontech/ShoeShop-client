import Banner from "@/components/Home/Banner";
import BestSellers from "@/components/Home/BestSellers";
import CategoryPage from "@/components/Home/CategoryPage";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

import JustLanded from "@/components/Home/JustLanded";
import PickedCollection from "@/components/Home/PickedCollection";
import { DiscountPromo, EidPromo, LimitedPromo, SalePromo } from "@/components/Home/Promo";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <CategoryPage/>
      <div className="max-w-7xl my-10 mx-auto"> <EidPromo/> </div>
      <JustLanded/>
      <PickedCollection/>
      <div className="max-w-7xl my-10 mx-auto"> <SalePromo/> </div>
      <BestSellers/>
      <div className="max-w-7xl my-10 mx-auto"> <LimitedPromo/> </div>
      <FeaturedProducts/>
      <div className="max-w-7xl my-10 mx-auto"> <DiscountPromo/> </div>
    </div>
  );
};

export default Home;
