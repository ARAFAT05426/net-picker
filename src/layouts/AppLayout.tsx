import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ChatBox from "../components/chat_bot/ChatBox";
import ScrollToTop from "../components/btns/ScrolltoTop";

const AppLayout = () => {
    return (<>
        <Header />
        <main className="">
            <div className="mt-40" />
            <Outlet />
            <div className="fixed bottom-3.5 right-3.5 flex flex-col items-center gap-y-2.5 z-50">
                <ScrollToTop />
                <ChatBox />
            </div>
        </main>
        <Footer />
    </>);
}
export default AppLayout;