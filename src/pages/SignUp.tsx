import ActionBtn from "../components/btns/ActionBtn";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import AuthField from "../components/fields/AuthField";

const SignUp: React.FC = () => {
    return (
        <main className="container h-screen flex items-center justify-center">
            {/* Sign Up Section */}
            <div className="w-full max-w-sm flex-col items-center tracking-wider">
                <Link to={'/'} className="flex items-center gap-x-1 text-xs font-medium">
                    <GoChevronLeft />
                    Back to Home
                </Link>
                <h4 className="mt-10 mb-0.5 text-4xl font-bold text-navy-700">
                    Sign Up
                </h4>
                <p className="mb-5 text-xs text-gray-600 font-medium">
                    Use your email and password to create an account!
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

                {/* Confirm Password */}
                <AuthField
                    extra="mb-3"
                    label="Confirm Password *"
                    placeholder="Retype your password"
                    id="confirmPassword"
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
                            I agree to the terms and conditions
                        </p>
                    </div>
                </div>

                {/* Sign Up Button */}
                <ActionBtn>
                    Sign Up
                </ActionBtn>

                {/* Footer - Log In Link */}
                <div className="mt-4">
                    <span className=" text-sm font-medium text-navy-700-600">
                        Already have an account?
                    </span>
                    <Link to={"/login"} className="ml-1 text-sm font-medium text-blue-700 hover:underline transition-all">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
