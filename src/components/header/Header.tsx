import { useState, useEffect } from "react";
import InnerHeader from "./InnerHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 50 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed inset-x-0 top-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <TopHeader isScrolled={prevScrollPos} />
      <InnerHeader />
      <NavHeader />
    </header>
  );
};

export default Header;
