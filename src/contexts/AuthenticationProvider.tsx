import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import axios_common from '../utils/axios_common';
import user_props from '../types/user_props';

interface AuthenticationContextType {
    user: user_props | null;
    error: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    forgetPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, email: string, password: string) => Promise<void>; // Added resetPassword here
}

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

interface AuthenticationProviderProps {
    children: ReactNode;
}

const AuthenticationProvider: FC<AuthenticationProviderProps> = ({ children }) => {
    const [user, setUser] = useState<user_props | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // Fetch user data (CSRF token, user data, etc.)
    const fetchUser = async () => {
        try {
            const response = await axios_common.get('/api/user');
            setUser(response.data);
        } catch (err) {
            console.error('Error fetching user:', err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setError(null);
            await axios_common.get('/sanctum/csrf-cookie');  // CSRF Token
            const response = await axios_common.post('/login', { email, password });
            setUser(response.data.user);  // Update user after login
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            setIsLoading(true);
            setError(null);
            await axios_common.get('/sanctum/csrf-cookie');  // CSRF Token
            const response = await axios_common.post('/register', { name, email, password });
            console.log(response)
            setUser(response.data.user);  // Update user after registration
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.log(err)
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios_common.post('/logout');
            setUser(null);  // Clear user state after logout
        } catch (err) {
            console.log(err);
            setError('Logout failed');
        }
    };

    const forgetPassword = async (email: string) => {
        try {
            const response = await axios_common.post('/forgot-password', { email });
            console.log('Password reset link sent', response);
        } catch (err) {
            console.log(err);
            setError('Failed to send reset link');
        }
    };

    const resetPassword = async (token: string, email: string, newPassword: string) => {
        try {
            const response = await axios_common.post('/reset-password', {
                token,
                email,
                password: newPassword
            });
            console.log('Password has been reset successfully', response.data);
        } catch (err) {
            console.log('Error resetting password', err);
            setError('Failed to reset password');
        }
    };
    
    return (
        <AuthenticationContext.Provider value={{ user, error, isLoading, login, register, logout, forgetPassword, resetPassword }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

const useAuth = (): AuthenticationContextType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthenticationProvider');
    }
    return context;
};

export { AuthenticationProvider, useAuth };
