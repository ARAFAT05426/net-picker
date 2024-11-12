import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface AuthFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    extra?: string;
    placeholder: string;
}

const AuthField: React.FC<AuthFieldProps> = ({ name, label, placeholder, id, type, extra }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <div className={`relative w-full ${extra}`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy-700">
                {label}
            </label>
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={isPasswordVisible ? "text" : type}
                    placeholder={placeholder}
                    className="w-full p-3 mt-2 rounded border border-gray-300 bg-transparent text-base text-navy-700 placeholder-gray-500"
                />
                {/* Eye toggle button */}
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2.5 top-6 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuthField;
