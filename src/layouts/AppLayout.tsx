import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AppLayout = () => {
    return (<>
        <Header />
        <main className="">
            <Outlet />
        </main>
        <Footer />
    </>);
}
export default AppLayout;