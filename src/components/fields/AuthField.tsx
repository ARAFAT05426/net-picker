interface AuthFieldProps {
    label: string;
    placeholder: string;
    id: string;
    type: string;
    extra?: string;
}

const AuthField: React.FC<AuthFieldProps> = ({ label, placeholder, id, type, extra }) => {
    return (
        <div className={`w-full ${extra}`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full p-3 mt-2 rounded-md border border-gray-300 bg-transparent text-base text-navy-700 placeholder-gray-500"
            />
        </div>
    );
};

export default AuthField;
