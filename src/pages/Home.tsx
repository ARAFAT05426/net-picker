import Banner from "../components/home_page/Banner";
import DealsOfDay from "../components/home_page/DealsOfDay";
import OurFeatures from "../components/home_page/OurFeatures";
import PopularCategories from "../components/home_page/PopularCategories";

const Home = () => {
    return (<>
        <Banner />
        <OurFeatures />
        <DealsOfDay />
        <PopularCategories />
    </>);
}
export default Home;