/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import axios_common from '../utils/axios_common';
import user_props from '../types/user_props';

interface ContextProviderType {
    user: user_props | null;
    error: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    forgetPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, email: string, password: string) => Promise<void>;
}

const AuthenticationContext = createContext<ContextProviderType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<user_props | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch user data (CSRF token, user data, etc.)
    const fetchUser = async () => {
        try {
            const response = await axios_common.get('/api/user');
            setUser(response.data);  // Assuming response.data has a user object
        } catch (err) {
            console.error('Error fetching user:', err);
            setError('Failed to fetch user data');
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
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Login failed');
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
            setUser(response.data.user);  // Update user after registration
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios_common.post('/logout');
            setUser(null);  // Clear user state after logout
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError('Logout failed');
        }
    };

    const forgetPassword = async (email: string) => {
        try {
            const response = await axios_common.post('/forgot-password', { email });
            console.log('Password reset link sent', response);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err: any) {
            setError('Failed to send reset link');
        }
    };

    const resetPassword = async (token: string, email: string, newPassword: string) => {
        if (!email || !newPassword) {
            setError('Email and password are required');
            return;
        }

        try {
            const response = await axios_common.post('/reset-password', {
                token,
                email,
                password: newPassword,
            });
            console.log('Password has been reset successfully', response.data);
        } catch (err) {
            console.log(err)
            setError('Failed to reset password');
        }
    };

    return (
        <AuthenticationContext.Provider value={{ user, error, isLoading, login, register, logout, forgetPassword, resetPassword }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

const useProvider = (): ContextProviderType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useProvider must be used within an ContextProvider');
    }
    return context;
};

export { ContextProvider, useProvider };
