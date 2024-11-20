import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../common/SearchBar";

const InnerHeader = () => {
  return (
    <div className="py-4 bg-gray-50 border-b shadow-sm">
      <div className="container flex justify-between items-center">
        <Logo />
        <SearchBar className="hidden md:flex" />
        <Link
          to="/dashboard"
          className="inline-block bg-primary text-white px-6 py-2 rounded-sm transition"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default InnerHeader;
