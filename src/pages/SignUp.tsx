import { useProvider } from "../contexts/ContextProvider";
import AuthField from "../components/fields/AuthField";
import ActionBtn from "../components/btns/ActionBtn";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import * as React from "react";

const SignUp: React.FC = () => {
    const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const { register } = useProvider();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        // Using FormData to handle form values
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Validation
        if (!email || !password) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;
        }

        if (!termsAccepted) {
            setErrorMessage("You must agree to the terms and conditions.");
            return;
        }

        setErrorMessage(""); // Clear error message if validation passes

        // Handle the sign-up process with register function
        try {
            await register(name, email, password);
        } catch (error) {
            console.log(error)
            setErrorMessage("Registration failed. Please try again.");
        }
    };

    return (
        <main className="container h-screen flex items-center justify-center">
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

                {/* Error Message */}
                {errorMessage && (
                    <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
                )}

                <form onSubmit={handleSignUp}>
                    <AuthField
                        extra="mb-3"
                        label="Name *"
                        placeholder="John Smith"
                        id="name"
                        type="text"
                        name="name"
                    />
                    <AuthField
                        extra="mb-3"
                        label="Email *"
                        placeholder="mail@example.com"
                        id="email"
                        type="text"
                        name="email"
                    />
                    <AuthField
                        extra="mb-3"
                        label="Password *"
                        placeholder="Min. 8 characters"
                        id="password"
                        type="password"
                        name="password"
                    />
                    {/* Terms Checkbox */}
                    <div className="mb-4 flex items-center justify-between px-0.5">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
                                name="termsAccepted"
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(prev => !prev)}
                            />
                            <p className="ml-2 text-sm font-medium text-navy-700">
                                I agree to the terms and conditions
                            </p>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <ActionBtn type="submit">
                        Sign Up
                    </ActionBtn>
                </form>

                {/* Footer - Log In Link */}
                <div className="mt-4">
                    <span className="text-sm font-medium text-navy-700-600">
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
