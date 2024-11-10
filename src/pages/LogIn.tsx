import { Link } from "react-router-dom";
import ActionBtn from "../components/btns/ActionBtn";
import { GoChevronLeft } from "react-icons/go";
import AuthField from "../components/fields/AuthField";

const LogIn: React.FC = () => {
  return (
    <main className="container h-screen flex items-center justify-center">
      {/* Sign In Section */}
      <div className="w-full max-w-sm flex-col items-center tracking-wider">
        <Link to={'/'} className="flex items-center gap-x-1 text-xs font-medium">
          <GoChevronLeft />
          Back to Home
        </Link>
        <h4 className="mt-10 mb-0.5 text-4xl font-bold text-navy-700">
          Log In
        </h4>
        <p className="mb-5 text-xs text-gray-600 font-medium">
          Use your email and password to log in!
        </p>
        {/* Email */}
        <AuthField
          extra="mb-3"
          label="Email *"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <AuthField
          extra="mb-3"
          label="Password *"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-0.5">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
            />
            <p className="ml-2 text-sm font-medium text-navy-700">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:underline transition-all"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {/* Log In Button */}
        <ActionBtn>
          Log In
        </ActionBtn> 

        {/* Footer - Sign Up Link */}
        <div className="mt-3.5">
          <span className=" text-sm font-medium text-navy-700-600">
            Not registered yet?
          </span>
          <Link to={"/signup"} className="ml-1 text-sm font-medium text-blue-700 hover:underline transition-all">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
