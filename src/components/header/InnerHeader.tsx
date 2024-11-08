import LinkBtn from "../btns/LinkBtn";
import Logo from "../logo/Logo";
import SearchBar from "./SearchBar";

const InnerHeader = () => {
    return (<div className="py-3.5">
        <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="py-1.5 md:py-0 w-full md:w-fit flex items-center justify-between">
                <Logo />
                <LinkBtn className="block md:hidden" to="/shop">
                    Start Now
                </LinkBtn>
            </div>
            <SearchBar />
            <LinkBtn className="hidden md:block" to="/shop">
                Start Now
            </LinkBtn>
        </div>
    </div>);
}
export default InnerHeader;