import { useProvider } from "../contexts/ContextProvider";
import AuthField from "../components/fields/AuthField";
import ActionBtn from "../components/btns/ActionBtn";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { forgetPassword } = useProvider();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;

        try {
            await forgetPassword(email);
            // Optionally handle success, e.g., show a success message
        } catch (error) {
            setErrorMessage("There was an issue sending the reset link. Please try again.");
            console.error(error);
        } finally {
            setLoading(false); // Ensure loading state is reset after request
        }
    };

    return (
        <main className="container h-screen flex items-center justify-center">
            <div className="w-full max-w-sm flex-col items-center">
                {/* Back to Home Link */}
                <Link to="/" className="flex items-center gap-x-2 text-xs font-medium text-navy-700 hover:text-navy-900 transition-colors">
                    <GoChevronLeft />
                    Back to Home
                </Link>

                {/* Forgot Password Header */}
                <h4 className="mt-10 mb-1 text-3xl font-bold text-navy-700">Forgot Password</h4>
                <p className="mb-5 text-sm text-gray-600">
                    Enter your email address to receive a password reset link.
                </p>

                {/* Error Message */}
                {errorMessage && (
                    <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
                )}

                {/* Forgot Password Form */}
                <form onSubmit={handleSubmit}>
                    <AuthField
                        name="email"
                        extra="mb-4"
                        label="Email *"
                        placeholder="mail@example.com"
                        id="email"
                        type="email" // Use type="email" for email validation
                    />

                    {/* Submit Button */}
                    <ActionBtn type="submit" disabled={loading} className="w-full">
                        {loading ? "Sending..." : "Send Reset Link"}
                    </ActionBtn>
                </form>

                {/* Log In Link */}
                <div className="mt-3.5">
                    <span className="text-sm font-medium text-navy-700">
                        Remember your password?
                    </span>
                    <Link to="/login" className="ml-1 text-sm font-medium text-blue-700 hover:underline transition-all">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ForgotPassword;
