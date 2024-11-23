import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useProvider } from "../contexts/ContextProvider";
import AuthField from "../components/fields/AuthField";
import ActionBtn from "../components/btns/ActionBtn";
import { GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import { toast } from "sonner";

const ResetPassword: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [searchParam] = useSearchParams();
    const { resetPassword } = useProvider();
    const navigate = useNavigate();
    const params = useParams();

    const email = searchParam.get("email") || '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");
        const formData = new FormData(e.target as HTMLFormElement);
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            setLoading(false);
            toast.error("Passwords do not match."); // Show toast on error
            return;
        }

        try {
            const token = params.token;
            if (!token) {
                setErrorMessage("Invalid or expired token.");
                setLoading(false);
                toast.error("Invalid or expired token."); // Show toast on error
                return;
            }

            // Make the resetPassword request
            await resetPassword(token, email, password);
            setSuccessMessage("Your password has been successfully reset. You can now log in.");
            toast.success("Password reset successful!"); // Show toast on success
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            setErrorMessage("There was an issue resetting your password. Please try again.");
            toast.error("There was an issue resetting your password."); // Show toast on error
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="container h-screen flex items-center justify-center">
            <div className="w-full max-w-sm flex-col items-center">
                <Link to="/" className="flex items-center gap-x-2 text-xs font-medium text-navy-700 hover:text-navy-900 transition-colors">
                    <GoChevronLeft />
                    Back to Home
                </Link>

                <h4 className="mt-10 mb-1 text-3xl font-bold text-navy-700">Reset Your Password</h4>
                <p className="mb-5 text-sm text-gray-600">Please enter your new password below.</p>

                {/* Display error message */}
                {errorMessage && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}

                {/* Display success message */}
                {successMessage && <p className="mb-4 text-sm text-green-600">{successMessage}</p>}

                <form onSubmit={handleSubmit}>
                    <AuthField
                        name="password"
                        extra="mb-4"
                        label="New Password *"
                        placeholder="Enter your new password"
                        id="password"
                        type="password"
                    />
                    <AuthField
                        name="confirmPassword"
                        extra="mb-6"
                        label="Confirm Password *"
                        placeholder="Confirm your new password"
                        id="confirmPassword"
                        type="password"
                    />
                    <ActionBtn type="submit" disabled={loading} className="w-full">
                        {loading ? "Resetting..." : "Reset Password"}
                    </ActionBtn>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-navy-700">Remembered your password?</span>
                    <Link to="/login" className="ml-1 text-sm font-medium text-blue-700 hover:underline transition-all">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ResetPassword;
