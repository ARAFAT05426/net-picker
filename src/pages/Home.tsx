import Banner from "../components/home_page/Banner";
import BentoOffers from "../components/home_page/BentoOffers";
import DealsOfDay from "../components/home_page/DealsOfDay";
import ExlopreCollection from "../components/home_page/ExlopreCollection";
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
    </>);
}
export default Home;