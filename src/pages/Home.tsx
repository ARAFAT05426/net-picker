import Banner from "../components/home_page/Banner";
import BentoOffers from "../components/home_page/BentoOffers";
import BrandCarousel from "../components/home_page/BrandCarousel";
import DealsOfDay from "../components/home_page/DealsOfDay";
import ExlopreCollection from "../components/home_page/ExlopreCollection";
import ExploreBlogs from "../components/home_page/ExploreBlogs";
import OurFeatures from "../components/home_page/OurFeatures";
import PopularCategories from "../components/home_page/PopularCategories";

const Home = () => {
    return (<>
        <Banner />
        <OurFeatures />
        <DealsOfDay />
        <PopularCategories />
        <ExlopreCollection />
        <BentoOffers />
        <BrandCarousel />
        <ExploreBlogs />
    </>);
}
export default Home;