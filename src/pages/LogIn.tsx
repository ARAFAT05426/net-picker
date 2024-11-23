import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import ActionBtn from "../components/btns/ActionBtn";
import AuthField from "../components/fields/AuthField";
import { useProvider } from "../contexts/ContextProvider";
import { toast } from "sonner";

const LogIn: React.FC = () => {
  const [keepLoggedIn, setKeepLoggedIn] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const { login } = useProvider();
  const navigate = useNavigate();  // Set up navigation for redirection

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Using FormData to handle form values
    const formData = new FormData(e.target as HTMLFormElement);
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

    setErrorMessage(""); // Clear error message if validation passes

    // Handle the login process
    try {
      await login(email, password);
      toast.success("Login successful!");  // Show success toast
      navigate("/dashboard");  // Redirect to dashboard after successful login
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentials and try again.");
      toast.error("Login failed. Please check your credentials and try again.");  // Show error toast
    }
  };

  return (
    <>
      <main className="container h-screen flex items-center justify-center">
        {/* Log In Section */}
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

          {/* Error Message */}
          {errorMessage && (
            <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
          )}

          <form onSubmit={handleLogIn}>
            {/* Email */}
            <AuthField
              name="email"
              extra="mb-3"
              label="Email *"
              placeholder="mail@example.com"
              id="email"
              type="text"
            />

            {/* Password */}
            <AuthField
              name="password"
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
                  checked={keepLoggedIn}
                  onChange={() => setKeepLoggedIn(prev => !prev)}
                />
                <p className="ml-2 text-sm font-medium text-navy-700">
                  Keep me logged in
                </p>
              </div>
              <Link
                className="text-sm font-medium text-brand-500 hover:underline transition-all"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Log In Button */}
            <ActionBtn type="submit">
              Log In
            </ActionBtn>
          </form>

          {/* Footer - Sign Up Link */}
          <div className="mt-3.5">
            <span className="text-sm font-medium text-navy-700-600">
              Not registered yet?
            </span>
            <Link to={"/signup"} className="ml-1 text-sm font-medium text-blue-700 hover:underline transition-all">
              Create an account
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogIn;
