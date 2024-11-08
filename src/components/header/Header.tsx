import { useState, useEffect } from "react";
import InnerHeader from "./InnerHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [isVisible, setIsVisible] = useState(true);

    // Handle header visibility based on scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            setIsVisible(isScrollingUp || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <header
            className={`fixed inset-x-0 top-0 bg-white z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <TopHeader isScrolled={prevScrollPos} />
            <InnerHeader />
            <NavHeader />
        </header>
    );
};

export default Header;
