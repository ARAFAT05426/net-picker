import { createContext, useState, useContext, FC, ReactNode } from 'react';
import axios from 'axios';

interface AuthenticationContextType {
    user: unknown; // User data will be stored here
    isAuthenticated: boolean; // Check if user is authenticated
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

interface AuthenticationProviderProps {
    children: ReactNode;
}

const AuthenticationProvider: FC<AuthenticationProviderProps> = ({ children }) => {
    const [user, setUser] = useState<unknown>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://your-api-url.com/login', {
                email,
                password,
            });
            const { token, user } = response.data; // Assuming you get token and user info from response
            localStorage.setItem('authToken', token); // Store token in localStorage
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const response = await axios.post('http://your-api-url.com/register', {
                name,
                email,
                password,
            });
            const { token, user } = response.data;
            localStorage.setItem('authToken', token);
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthenticationContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

// Custom hook to use the authentication context
const useAuthentication = (): AuthenticationContextType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};

export { AuthenticationProvider, useAuthentication };
